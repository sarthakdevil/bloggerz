const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Ensure destination directory exists
const uploadDirectory = "public/images";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const upload = multer({
  dest: uploadDirectory,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB file size limit
  storage: multer.diskStorage({
    destination: uploadDirectory,
    filename: (req, file, cb) => {
      // Generate a unique filename to prevent overwriting
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const extension = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".webp", ".png", ".mp4"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      cb(new Error(`Unsupported file type! ${ext}`), false);
      return;
    }
    cb(null, true);
  },
});

module.exports = upload;
