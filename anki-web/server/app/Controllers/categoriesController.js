// Import access to database tables
const tables = require("../../database/tables");

// The controller manages the business logic for each route.

/**
 * Add (Create) a new Categorie
 * This function handles the creation of a new Categorie. It uses the CategorieService to create the Categorie
 * and returns the created Categorie with a 201 status code on success, or an error message with a 400 status code on failure.
 */

// const createCategorie = async (req, res, next) => {
//   try {
//     const Categorie = await tables.categorie.createCategorie(req.body);
//     res.status(201).json(Categorie);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error);
//   }
// };


/**
 * Browse (Get all) Categories
 * This function retrieves all Categories using the CategorieService. It returns the list of Categories with a 200 status code on success,
 * or an error message with a 400 status code on failure.
 */
const getAllCategories = async (req, res, next) => {
  try {
    const Categories = await tables.categorie.read();
    res.status(200).json(Categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};

/**
 * Read (Get) a specific Categorie by ID
 * This function retrieves a specific Categorie by its ID using the CategorieService. It returns the Categorie with a 200 status code if found,
 * a 404 status code if not found, or an error message with a 400 status code on failure.
 */

// const getCategorieById = async (req, res, next) => {
//   try {
//     const Categorie = await tables.categorie.getCategorieById(req.params.id);
//     if (Categorie) {
//       res.status(200).json(Categorie);
//     } else {
//       res.status(404).json({ error: "Package not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error)
//   }
// };

/**
 * Edit (Update) a specific Categorie by ID
 * This function updates a specific Categorie by its ID using the CategorieService. It returns the updated Categorie with a 200 status code if successful,
 * a 404 status code if the Categorie is not found, or an error message with a 400 status code on failure.
 */

// const updateCategorie = async (req, res, next) => {
//   try {
//     const Categorie = await tables.categorie.updateCategorie(req.params.id, req.body);
//     if (Categorie) {
//       res.status(200).json(Categorie);
//     } else {
//       res.status(404).json({ error: "Package not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     next(error);
//   }
// };

/**
 * Delete a specific Categorie by ID
 * This function deletes a specific Categorie by its ID using the CategorieService. It returns a 204 status code if successful,
 * a 404 status code if the Categorie is not found, or an error message with a 400 status code on failure.
 */

// const deleteCategorie = async (req, res, next) => {
//   try {
//     const success = await tables.categorie.deleteCategorie(req.params.id);
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
  // createCategorie,
  getAllCategories,
  // getCategorieById,
  // updateCategorie,
  // deleteCategorie,
};
