// src/models/libro.js
const pool = require('../database/database');

const Libro = {
  async getAllWithSearch(limit = 10, offset = 0, search = '', sortBy = 'id', sortOrder = 'asc') {
    const searchQuery = `%${search}%`;
    const validSortColumns = ['id', 'titulo', 'autor', 'año', 'genero', 'created_at', 'updated_at'];
    const orderBy = validSortColumns.includes(sortBy) ? sortBy : 'id';
    const orderDirection = sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';

    const query = `
      SELECT * FROM libros
      WHERE (titulo ILIKE $1 OR autor ILIKE $1 OR genero ILIKE $1)
      AND deleted = false
      ORDER BY ${orderBy} ${orderDirection}
      LIMIT $2 OFFSET $3
    `;
    const result = await pool.query(query, [searchQuery, limit, offset]);
    return result.rows;
  },

  async getById(id) {
    const result = await pool.query('SELECT * FROM libros WHERE id = $1 AND deleted = false', [id]);
    return result.rows[0];
  },

  async create(data) {
    const { titulo, autor, año, genero } = data;
    const result = await pool.query(
      `INSERT INTO libros (titulo, autor, año, genero, created_at, updated_at, deleted)
       VALUES ($1, $2, $3, $4, NOW(), NOW(), false) RETURNING *`,
      [titulo, autor, año, genero]
    );
    return result.rows[0];
  },

  async update(id, data) {
    const fields = [];
    const values = [];
    let idx = 1;

    for (const [key, value] of Object.entries(data)) {
      if (key !== 'id') {
        fields.push(`${key} = $${idx}`);
        values.push(value);
        idx++;
      }
    }

    if (fields.length === 0) {
      // Nothing to update
      const result = await pool.query(
        `SELECT * FROM libros WHERE id = $1 AND deleted = false`,
        [id]
      );
      return result.rows[0];
    }

    const query = `
      UPDATE libros SET ${fields.join(', ')}, updated_at = NOW()
      WHERE id = $${idx} AND deleted = false RETURNING *
    `;
    values.push(id);

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  async softDelete(id) {
    const result = await pool.query(
      `UPDATE libros SET deleted = true, updated_at = NOW() WHERE id = $1 AND deleted = false RETURNING *`,
      [id]
    );
    return result.rows[0];
  },

  async bulkCreate(libros) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const createdLibros = [];
      for (const libro of libros) {
        const { titulo, autor, año, genero } = libro;
        const res = await client.query(
          `INSERT INTO libros (titulo, autor, año, genero, created_at, updated_at, deleted)
           VALUES ($1, $2, $3, $4, NOW(), NOW(), false) RETURNING *`,
          [titulo, autor, año, genero]
        );
        createdLibros.push(res.rows[0]);
      }
      await client.query('COMMIT');
      return createdLibros;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  async bulkUpdate(libros) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const updatedLibros = [];
      for (const libro of libros) {
        const { id, titulo, autor, año, genero } = libro;
        const res = await client.query(
          `UPDATE libros SET titulo = $1, autor = $2, año = $3, genero = $4, updated_at = NOW()
           WHERE id = $5 AND deleted = false RETURNING *`,
          [titulo, autor, año, genero, id]
        );
        if (res.rows[0]) {
          updatedLibros.push(res.rows[0]);
        }
      }
      await client.query('COMMIT');
      return updatedLibros;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  async bulkSoftDelete(ids) {
    const result = await pool.query(
      `UPDATE libros SET deleted = true, updated_at = NOW()
       WHERE id = ANY($1::int[]) AND deleted = false RETURNING *`,
      [ids]
    );
    return result.rowCount;
  },
};

module.exports = Libro;
