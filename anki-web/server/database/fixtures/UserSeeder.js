const AbstractSeeder = require("./AbstractSeeder");
require('dotenv').config();

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with data
  run() {
    // Insert admin user from environment variables
    const adminUser = {
      role: process.env.ADMIN_ROLE,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };

    this.insert(adminUser); // Insert the admin user into the 'user' table 
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
