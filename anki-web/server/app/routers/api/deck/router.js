const express = require("express");

const router = express.Router();


// Define Your API Routes Here
const deckController = require("../../../Controllers/deckController");

// Define Your service Here
const upload = require("../../../services/uploadService")
const { validateDeck } = require("../../../services/validationService");

// The deckRouter manages the routes specific to the ‘deck’ resource.
router.post("/", upload.single("file"), validateDeck, deckController.createDeck);
router.get("/", deckController.getAllDecks);
// router.get('/:id', deckController.getDeckById);
// router.put('/:id', deckController.updateDeck);
// router.delete('/:id', deckController.deleteDeck);

module.exports = router;
