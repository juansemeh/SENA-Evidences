// src/services/libro.service.js
const Libro = require('../models/libro');

const LibroService = {
  async getAllLibros(page = 1, limit = 10, search = '', sortBy = 'id', sortOrder = 'asc') {
    return await Libro.getAllWithSearch(page, limit, search, sortBy, sortOrder);
  },

  async getLibroById(id) {
    return await Libro.getById(id);
  },

  async createLibro(data) {
    return await Libro.create(data);
  },

  async updateLibro(id, data) {
    return await Libro.update(id, data);
  },

  async softDeleteLibro(id) {
    return await Libro.softDelete(id);
  },

  async bulkCreateLibros(libros) {
    return await Libro.bulkCreate(libros);
  },

  async bulkUpdateLibros(libros) {
    return await Libro.bulkUpdate(libros);
  },

  async bulkSoftDeleteLibros(ids) {
    return await Libro.bulkSoftDelete(ids);
  },
};

module.exports = LibroService;
