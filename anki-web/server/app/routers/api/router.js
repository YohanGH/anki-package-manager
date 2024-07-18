// ./server/routers/api/router.js
const express = require('express');

const router = express.Router();

// Import And Use Routers Here
const deckRouter = require("./deck/router");
const categorieRouter = require("./categorie/router")

// The main router uses sub-routers for different resources
// Exemple de route
router.use("/deck", deckRouter);
router.use("/categorie", categorieRouter);

module.exports = router;
