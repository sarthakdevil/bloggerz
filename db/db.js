const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Blog');

const BlogSchema = new mongoose.Schema({
    banner: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
    },
    heading: {
        type: String,
        required: true,
        unique: true,
    },
    subheading: {
        type: String, // Corrected casing
    },
    paragraph: {
        type: String, // Corrected casing
    },
    image: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        },
    },
    fontColor:{
        type :String,
        default:"#000000"
    },
    bgColor:{
        type:String,
        default:"#ffffff"
    },
    font:{
        type:String,
        default:"Arial"
    }

});

const Blog = mongoose.model("Blog", BlogSchema); // Corrected variable name

module.exports = Blog;
