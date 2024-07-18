// Import access to database tables
const bcrypt = require('bcryptjs');
const tables = require("../../database/tables");

// The controller manages the business logic for each route.

/**
 * Add (Create) a new User
 * This function handles the creation of a new User. It uses the UserService to create the User
 * and returns the created User with a 201 status code on success, or an error message with a 400 status code on failure.
 */
const createUser = async (req, res, next) => {
  try {
    const user = await tables.user.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Browse (Get all) Users
 * This function retrieves all Users using the UserService. It returns the list of Users with a 200 status code on success,
 * or an error message with a 400 status code on failure.
 */
const getAllUsers = async (req, res, next) => {
  try {
    const users = await tables.user.read();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Read (Get) a specific User by ID
 * This function retrieves a specific User by its ID using the UserService. It returns the User with a 200 status code if found,
 * a 404 status code if not found, or an error message with a 400 status code on failure.
 */
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.findByEmail(email); // Assuming you have a method to find a user by email
    
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password); // Assuming passwords are hashed
    
    if (!isMatch) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    delete user.password; // Remove password before sending the response

    // If user is found and credentials match, return user details or token
    // Here, you'd typically generate a JWT token for the user
    res.status(200).json({ message: "Login successful", user }); // You may return a token instead of user details
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

// const getUserById = async (req, res, next) => {
//   try {
//     const user = await tables.user.findById(req.params.id); // Supposons que findById est une méthode valide
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error);
//   }
// };

/**
 * Edit (Update) a specific User by ID
 * This function updates a specific User by its ID using the UserService. It returns the updated User with a 200 status code if successful,
 * a 404 status code if the User is not found, or an error message with a 400 status code on failure.
 */

// const updateUser = async (req, res, next) => {
//   try {
//     const user = await tables.user.updateUser(req.params.id, req.body);
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: "Package not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error);
//   }
// };

/**
 * Delete a specific User by ID
 * This function deletes a specific User by its ID using the UserService. It returns a 204 status code if successful,
 * a 404 status code if the User is not found, or an error message with a 400 status code on failure.
 */

// const deleteUser = async (req, res, next) => {
//   try {
//     const success = await tables.user.deleteUser(req.params.id);
//     if (success) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ error: "Package not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error);
//   }
// };

module.exports = {
  createUser,
  getAllUsers,
  loginUser,
  // getUserById,
  // updateUser,
  // deleteUser,
};
