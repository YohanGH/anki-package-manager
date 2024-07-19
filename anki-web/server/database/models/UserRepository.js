const AbstractRepository = require("./AbstractRepository");

// The model manages CRUD operations for the ‘User’ table.

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  // Create a new User
  async create(data) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} SET ?`,
      [data]
    );
    return result.insertId;
  }

  // The R of CRUD - Read operations
  // Retrieve all Users
  async read() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}`
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // Update a User by its ID
  
  // async update(id, data) {
  //   const [result] = await this.database.query(
  //     `UPDATE ${this.table} SET ? WHERE id = ?`,
  //     [data, id]
  //   );
  //   return result.affectedRows;
  // }

  // The D of CRUD - Delete operation
  // Delete a User by its ID

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
  
  async findByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  async findById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

}

module.exports = UserRepository;
