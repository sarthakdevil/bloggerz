const cloudinary = require('cloudinary').v2;
require('dotenv').config();
// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

async function uploadOnCloudinary(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return result;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
}

module.exports = {uploadOnCloudinary};
