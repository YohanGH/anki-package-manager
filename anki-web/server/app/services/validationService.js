// services/validationService.js

// `body' is used to validate the fields in the body of the request.
// `validationResult' is used to check whether validation errors have been detected.
const { body, validationResult } = require('express-validator');

const validateDeck = [
  // Validation of the ‘title’ and ‘description’ fields to ensure that they are strings.
  body('title').isString().withMessage('Title must be a string'),
  body('description').isString().withMessage('Description must be a string'),

  (req, res, next) => {
    // Extraction of query validation errors.
    const errors = validationResult(req);

    //  If there are validation errors, return a response with a status of 400 (Bad Request).
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    // If no validation error is detected, move on to the next middleware.
    next();
  }
];

module.exports = { validateDeck };
