const express = require('express');

const router = express.Router();

// Define Your API Routes Here
const deckController = require("../../../Controllers/deckController");

// 
const { validateDeck } = require("../../../services/validationService");

// The deckRouter manages the routes specific to the ‘deck’ resource.
router.post('/', validateDeck, deckController.createPaquet);
router.get('/', deckController.getAllDecks);
router.get('/:id', deckController.getPaquetById);
router.put('/:id', deckController.updatePaquet);
router.delete('/:id', deckController.deletePaquet);

module.exports = router;