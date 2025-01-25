const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v2: cloudinary } = require("cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "uploads", 
      resource_type: "auto", 
    },
  });
  
  const upload = multer({ storage });