const express = require("express");

const router = express.Router();

// Define Your API Routes Here
const categorieController = require("../../../Controllers/categoriesController");

// Define Your service Here

// The categorieRouter manages the routes specific to the ‘categorie’ resource.
// router.post('/', categorieController.createCategorie);
router.get('/', categorieController.getAllCategories);
// router.get('/:id', categorieController.getCategorieById);
// router.put('/:id', categorieController.updateCategorie);
// router.delete('/:id', categorieController.deleteCategorie);

module.exports = router;