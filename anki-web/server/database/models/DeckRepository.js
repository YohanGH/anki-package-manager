const AbstractRepository = require("./AbstractRepository");

// The model manages CRUD operations for the ‘deck’ table.

class DeckRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "deck" });
  }

  // The C of CRUD - Create operation
  // Create a new deck
  async create(data) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET ?`,
      [data]
    );
    return result.insertId;
  }

  // The R of CRUD - Read operations
  // Retrieve all decks
  async read() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}`
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // Update a deck by its ID
  
  // async update(id, data) {
  //   const [result] = await this.database.query(
  //     `UPDATE ${this.table} SET ? WHERE id = ?`,
  //     [data, id]
  //   );
  //   return result.affectedRows;
  // }

  // The D of CRUD - Delete operation
  // Delete a deck by its ID

  // async delete(id) {
  //   const [result] = await this.database.query(
  //     `DELETE FROM ${this.table} WHERE id = ?`,
  //     [id]
  //   );
  //   return result.affectedRows;
  // }

  async getAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = DeckRepository;
