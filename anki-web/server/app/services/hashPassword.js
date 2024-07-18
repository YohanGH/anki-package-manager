const bcrypt = require('bcryptjs');

const hashPassword = async (req, res, next) => {
  try {
    if (req.body.password) {
      // Set the number of rounds to generate the salt used in the hash
      const saltRounds = 10;

      // Hide user password with bcrypt and number of saltRounds
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      // Replace plaintext password with hashed password
      req.body.password = hashedPassword;
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Error hashing password" });
  }
};

module.exports = hashPassword;