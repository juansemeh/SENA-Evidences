// src/routes/libros.routes.js
const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/libro.controller');
const validateLibro = require('../middleware/validateLibro');
const cacheMiddleware = require('../middleware/cache');
const authenticateJWT = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // configure multer for file uploads

// Protect all routes with JWT auth
router.use(authenticateJWT);

router.post('/libros/bulk', LibroController.bulkCreateLibros);
router.put('/libros/bulk', LibroController.bulkUpdateLibros);
router.delete('/libros/bulk', LibroController.bulkDeleteLibros);

// Single resource routes
router.get('/libros', cacheMiddleware, LibroController.getAllLibros);
router.get('/libros/:id', cacheMiddleware, LibroController.getLibroById);
router.post('/libros', validateLibro, LibroController.createLibro);
router.put('/libros/:id', validateLibro, LibroController.updateLibro);
router.delete('/libros/:id', LibroController.deleteLibro);

// File upload for book cover images
router.post('/libros/:id/cover', upload.single('cover'), LibroController.uploadCoverImage);
router.get('/libros/:id/cover', LibroController.getCoverImage);
router.delete('/libros/:id/cover', LibroController.deleteCoverImage);

module.exports = router;
