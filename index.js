const express = require('express');
const app = express();
const parser = require('body-parser');
const mongoose = require('mongoose');
const { render } = require('ejs');
const fs = require('fs');
const multer = require('multer')
const upload = require('./multer/multer.config.js');
const Blog = require('./db/db.js');
const path = require('path')
const {uploadOnCloudinary} =  require('./cloud/cloudinary.js');
require('dotenv').config();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  Blog.find()
      .sort([['date','descending']])
      .then((data)=>{
          console.log(data);
          res.render('home', { Blogs: data });
      })
      .catch((error) => {
          console.error('Error:', error);
          res.status(500).send('Server error');
      });
});

app.get('/blog', (req, res) => {
    res.render('postcreate');
});

app.use(express.json());

app.post('/submit', upload.fields([{ name: "banner", maxCount: 1 }, { name: 'image', maxCount: 1 }]), async (req, res) => {
    try {
        const { heading, subheading, content,font } = req.body;
        const Color = req.body.color;
        const bgcolor = req.body.bgcolor;
        let bannerUrl = '';
        let imageUrl = '';
        let bannerId = '';
        let imageId = '';

        // Check if all required fields are present
        if (!heading || !subheading || !content) {
            return res.status(400).send('Please fill out all fields');
        }

        // Check if the user provided banner image
        if (req.files && req.files["banner"]) {
            const filepath = req.files["banner"][0].path;
            // Upload banner image to Cloudinary
            const result1 = await uploadOnCloudinary(filepath);
            bannerUrl = result1.secure_url;
            bannerId = result1.public_id;
        }

        // Check if the user provided image
        if (req.files && req.files['image']) {
            const imgFilePath = req.files['image'][0].path;
            // Upload image to Cloudinary
            const result2 = await uploadOnCloudinary(imgFilePath);
            imageUrl = result2.secure_url;
            imageId = result2.public_id;
        }

        // Create a new blog entry
        const newBlog = new Blog({
            banner: {
                public_id: bannerId,
                secure_url: bannerUrl,
            },
            heading,
            subheading,
            paragraph: content.replace(/\n/g, '<br>'),
            image: {
                public_id: imageId,
                secure_url: imageUrl,
            },
            bgColor:bgcolor,
            fontColor:Color,
            font:font
        });

        // Save the new blog entry
        const savedBlog = await newBlog.save();
        console.log(`Blog saved successfully with id ${savedBlog._id}`);
        res.redirect('/');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});
app.get('/blogs/:id', async (req, res) => {
    try {
        const blogID = req.params.id;
        const foundBlog = await Blog.findById(blogID);

        if (foundBlog) {
            console.log(foundBlog);
            res.render("preview", { blog: foundBlog });
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
