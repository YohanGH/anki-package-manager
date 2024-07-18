// services/validationService.js

// `body' is used to validate the fields in the body of the request.
// `validationResult' is used to check whether validation errors have been detected.
const { body, validationResult } = require("express-validator");

const validateDeck = [
  // Validation of the ‘title’ and ‘description’ fields to ensure that they are strings.
  body("title").isString().withMessage("Title must be a string"),
  body("description").isString().withMessage("Description must be a string"),

  (req, res, next) => {
    // Extraction of query validation errors.
    const errors = validationResult(req);

    //  If there are validation errors, return a response with a status of 400 (Bad Request).
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If no validation error is detected, move on to the next middleware.
    next();
    return undefined
  },
];

const validateLogin = [
  // Validation of the 'email' field to ensure that it is a string.
  body("email").isString().withMessage("email must be a string"),
  // Validation of the 'password' field to ensure that it meets certain criteria.
  body("password")
    .isString()
    .withMessage("password must be a string")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),

  (req, res, next) => {
    // Extraction of query validation errors.
    const errors = validationResult(req);

    //  If there are validation errors, return a response with a status of 400 (Bad Request).
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If no validation error is detected, move on to the next middleware.
    next();
    return undefined;
  },
];

module.exports = {
  validateDeck,
  validateLogin,
};
