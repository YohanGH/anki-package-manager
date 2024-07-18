const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const CategorieSeeder = require("./CategorieSeeder");
const UserSeeder = require("./UserSeeder");

class DeckSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "deck", truncate: true, dependencies: [CategorieSeeder, UserSeeder] });
  }

  run(adminId) {
    const decks = Array.from({ length: 30 }).map(() => ({
      title: this.faker.lorem.sentence(3),
      description: this.faker.lorem.paragraph(),
      id_categorie: Math.floor(Math.random() * 10) + 1, // Assuming 10 categories
      id_user: adminId // Use the admin ID returned from UserSeeder
    }));

    const deckPromises = decks.map(deck => this.insert(deck));

    return Promise.all(deckPromises);
  }
}

module.exports = DeckSeeder;
