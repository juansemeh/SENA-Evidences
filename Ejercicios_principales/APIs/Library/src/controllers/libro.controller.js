// src/controllers/libro.controller.js
const LibroService = require('../services/libro.service');
const asyncHandler = require('../middleware/asyncHandler');
const path = require('path');
const fs = require('fs');

const LibroController = {
  getAllLibros: asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, search = '', sortBy = 'id', sortOrder = 'asc' } = req.query;
    const libros = await LibroService.getAllLibros(Number(page), Number(limit), search, sortBy, sortOrder);
    res.json(libros);
  }),

  getLibroById: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const libro = await LibroService.getLibroById(id);
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }),

  createLibro: asyncHandler(async (req, res) => {
    const newLibro = await LibroService.createLibro(req.body);
    res.status(201).json(newLibro);
  }),

  updateLibro: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updatedLibro = await LibroService.updateLibro(id, req.body);
    if (updatedLibro) {
      res.json(updatedLibro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }),

  deleteLibro: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deleted = await LibroService.softDeleteLibro(id);
    if (deleted) {
      res.json({ message: 'Libro eliminado (soft delete)' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }),

  bulkCreateLibros: asyncHandler(async (req, res) => {
    const libros = req.body;
    if (!Array.isArray(libros)) {
      return res.status(400).json({ message: 'Se espera un array de libros' });
    }
    const createdLibros = await LibroService.bulkCreateLibros(libros);
    res.status(201).json(createdLibros);
  }),

  bulkUpdateLibros: asyncHandler(async (req, res) => {
    const libros = req.body;
    if (!Array.isArray(libros)) {
      return res.status(400).json({ message: 'Se espera un array de libros' });
    }
    const updatedLibros = await LibroService.bulkUpdateLibros(libros);
    res.json(updatedLibros);
  }),

  bulkDeleteLibros: asyncHandler(async (req, res) => {
    const ids = req.body;
    if (!Array.isArray(ids)) {
      return res.status(400).json({ message: 'Se espera un array de IDs' });
    }
    const deletedCount = await LibroService.bulkSoftDeleteLibros(ids);
    res.json({ message: `${deletedCount} libros eliminados (soft delete)` });
  }),

  uploadCoverImage: asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }
    // Save file path or URL in libro record
    const coverImagePath = path.join('uploads', req.file.filename);
    const updatedLibro = await LibroService.updateLibro(id, { coverImage: coverImagePath });
    if (updatedLibro) {
      res.json({ message: 'Imagen de portada subida', libro: updatedLibro });
    } else {
      // Delete uploaded file if libro not found
      fs.unlinkSync(req.file.path);
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  }),

  getCoverImage: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const libro = await LibroService.getLibroById(id);
    if (!libro || !libro.coverimage) {
      return res.status(404).json({ message: 'Imagen de portada no encontrada' });
    }
    const imagePath = path.resolve(libro.coverimage);
    res.sendFile(imagePath, (err) => {
      if (err) {
        res.status(500).json({ message: 'Error al enviar la imagen' });
      }
    });
  }),

  deleteCoverImage: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const libro = await LibroService.getLibroById(id);
    if (!libro || !libro.coverimage) {
      return res.status(404).json({ message: 'Imagen de portada no encontrada' });
    }
    const imagePath = path.resolve(libro.coverimage);
    fs.unlink(imagePath, async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al eliminar la imagen' });
      }
      // Clear coverimage field in DB
      const updatedLibro = await LibroService.updateLibro(id, { coverImage: null });
      res.json({ message: 'Imagen de portada eliminada', libro: updatedLibro });
    });
  }),
};

module.exports = LibroController;
