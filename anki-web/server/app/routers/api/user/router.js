const express = require("express");

const router = express.Router();

// Define Your API Routes Here
const userController = require("../../../Controllers/userController");

// Define Your service Here
const { validateLogin } = require("../../../services/validationService");
const hashPassword = require("../../../services/hashPassword");

// The userRouter manages the routes specific to the ‘user’ resource.

router.post("/login", validateLogin, userController.loginUser);
router.post("/", hashPassword, validateLogin, userController.createUser);

module.exports = router;
