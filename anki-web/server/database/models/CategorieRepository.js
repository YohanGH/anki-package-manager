const AbstractRepository = require("./AbstractRepository");

// The model manages CRUD operations for the ‘categorie’ table.

class CategorieRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "categorie" as configuration
    super({ table: "categorie" });
  }

  // The C of CRUD - Create operation
  // Create a new categorie
  async create(data) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET ?`,
      [data]
    );
    return result.insertId;
  }

  // The R of CRUD - Read operations
  // Retrieve all categories
  async read() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}`
    );
    return rows;
  }

  // Retrieve category ID by title
  async getCategoryIdByTitle(title) {
    const [rows] = await this.database.query(
      'SELECT id FROM categorie WHERE title = ?',
      [title]
    );
    if (rows.length === 0) {
      throw new Error('Category not found');
    }
    return rows[0].id;
  }

  // The U of CRUD - Update operation
  // Update a categorie by its ID
  
  // async update(id, data) {
  //   const [result] = await this.database.query(
  //     `UPDATE ${this.table} SET ? WHERE id = ?`,
  //     [data, id]
  //   );
  //   return result.affectedRows;
  // }
  
  // The D of CRUD - Delete operation
  // Delete a categorie by its ID

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

module.exports = CategorieRepository;
