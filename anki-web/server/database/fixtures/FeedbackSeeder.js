const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const DeckSeeder = require("./DeckSeeder");

class FeedbackSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "feedback", truncate: true, dependencies: [DeckSeeder] });
  }

  run() {
    for (let i = 0; i < 30; i += 1) {
      const fakeFeedback = {
        content: this.faker.lorem.paragraph(),
        id_deck: Math.floor(Math.random() * 30) + 1, // Assuming 30 decks
      };

      this.insert(fakeFeedback);
    }
  }
}

module.exports = FeedbackSeeder;
