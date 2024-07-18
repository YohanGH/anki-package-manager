// Import access to database tables
const tables = require("../../database/tables");

// The controller manages the business logic for each route.

/**
 * Add (Create) a new Deck
 * This function handles the creation of a new Deck. It uses the deckService to create the Deck
 * and returns the created Deck with a 201 status code on success, or an error message with a 400 status code on failure.
 */
const createDeck = async (req, res, next) => {
  try {
    const Deck = await tables.deck.createDeck(req.body);
    res.status(201).json(Deck);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Browse (Get all) Decks
 * This function retrieves all Decks using the deckService. It returns the list of Decks with a 200 status code on success,
 * or an error message with a 400 status code on failure.
 */
const getAllDecks = async (req, res, next) => {
  try {
    const Decks = await tables.deck.read();
    res.status(200).json(Decks);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Read (Get) a specific Deck by ID
 * This function retrieves a specific Deck by its ID using the deckService. It returns the Deck with a 200 status code if found,
 * a 404 status code if not found, or an error message with a 400 status code on failure.
 */
const getDeckById = async (req, res, next) => {
  try {
    const Deck = await tables.deck.getDeckById(req.params.id);
    if (Deck) {
      res.status(200).json(Deck);
    } else {
      res.status(404).json({ error: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error)
  }
};

/**
 * Edit (Update) a specific Deck by ID
 * This function updates a specific Deck by its ID using the deckService. It returns the updated Deck with a 200 status code if successful,
 * a 404 status code if the Deck is not found, or an error message with a 400 status code on failure.
 */
const updateDeck = async (req, res, next) => {
  try {
    const Deck = await tables.deck.updateDeck(req.params.id, req.body);
    if (Deck) {
      res.status(200).json(Deck);
    } else {
      res.status(404).json({ error: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Delete a specific Deck by ID
 * This function deletes a specific Deck by its ID using the deckService. It returns a 204 status code if successful,
 * a 404 status code if the Deck is not found, or an error message with a 400 status code on failure.
 */
const deleteDeck = async (req, res, next) => {
  try {
    const success = await tables.deck.deleteDeck(req.params.id);
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Package not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

module.exports = {
  createDeck,
  getAllDecks,
  getDeckById,
  updateDeck,
  deleteDeck,
};
