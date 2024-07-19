// services/validationService.js

// `body' is used to validate the fields in the body of the request.
// `validationResult' is used to check whether validation errors have been detected.
const { body, validationResult } = require("express-validator");
const path = require('path');

const validateDeck = [
  // Custom middleware to extract form data from multipart/form-data
  (req, res, next) => {
    // Check if the content type of the request is multipart/form-data
    if (req.headers['content-type'] && req.headers['content-type'].includes('multipart/form-data')) {
      // Define an array of fields we expect in the form data
      const fields = ['title', 'description', 'filter'];
      
      // Iterate over each field in the fields array
      fields.forEach(field => {
        // Check if the field is not present in req.body
        if (!req.body[field]) {
          // Set the field in req.body to an empty string or a default value
          req.body[field] = ''; // This can be changed to any default value you prefer
        }
      });
    }
    // Move to the next middleware in the stack
    next();
  },
  
  // Validation of the ‘title’ and ‘description’ fields to ensure that they are strings.
  body("title").isString().withMessage("Title must be a string"),
  body("description").isString().withMessage("Description must be a string"),
  body("filter").isString().withMessage("Filter must be a string"),

  (req, res, next) => {
    // Extraction of query validation errors.
    const errors = validationResult(req);

    //  If there are validation errors, return a response with a status of 400 (Bad Request).
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ errors: [{ msg: "File is required" }] });
    }

    // Check if the file has the .apkg extension
    if (path.extname(req.file.originalname).toLowerCase() !== '.apkg') {
      return res.status(400).json({ errors: [{ msg: "File must be in .apkg format" }] });
    }

    // If no validation error is detected, move on to the next middleware.
    next();
    return undefined;
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
