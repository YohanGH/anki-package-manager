const multer = require("multer");
const path = require("path");
const fs = require('fs');

// Configuring Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.resolve(__dirname, '../../uploads'); // Destination folder for files
      // Check if the directory exists, if not create it
      fs.mkdir(uploadPath, { recursive: true }, (err) => {
        if (err) {
          return cb(err);
        }
        return cb(null, uploadPath);
      });
    },
    filename: (req, file, cb) => {
      const packageName = req.body.title.replace(/\s+/g, "_").toLowerCase(); // File name deck
      cb(null, `${packageName}-${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  
  const upload = multer({ storage });

  module.exports = upload;