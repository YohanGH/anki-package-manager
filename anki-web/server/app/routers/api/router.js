// ./server/routers/api/router.js
const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/example', (req, res) => {
  res.send('Example route');
});

module.exports = router;
