const { body, validationResult } = require('express-validator');

const validateLibro = [
  body('titulo')
    .optional()
    .isString().withMessage('El título debe ser una cadena de texto')
    .isLength({ min: 1, max: 255 }).withMessage('El título debe tener entre 1 y 255 caracteres')
    .trim()
    .escape(),
  body('autor')
    .optional()
    .isString().withMessage('El autor debe ser una cadena de texto')
    .isLength({ min: 1, max: 255 }).withMessage('El autor debe tener entre 1 y 255 caracteres')
    .trim()
    .escape(),
  body('año')
    .optional()
    .isInt({ min: 0 }).withMessage('El año debe ser un número entero positivo'),
  body('genero')
    .optional()
    .isString().withMessage('El género debe ser una cadena de texto')
    .isLength({ min: 1, max: 100 }).withMessage('El género debe tener entre 1 y 100 caracteres')
    .trim()
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateLibro;
