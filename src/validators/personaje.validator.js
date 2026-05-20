const { body, validationResult } = require('express-validator');

exports.validatePersonaje = [
  body('nombre')
    .notEmpty().withMessage('El nombre es omsbligatorio')
    .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('ataque')
    .optional()
    .isInt({ min: 0, max: 100 }).withMessage('El ataque debe ser un número entre 0 y 100'),

  body('defensa')
    .optional()
    .isInt({ min: 0, max: 100 }).withMessage('La defensa debe ser un número entre 0 y 100'),

  body('estamina')
    .optional()
    .isInt({ min: 0, max: 100 }).withMessage('La estamina debe ser un número entre 0 y 100'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];