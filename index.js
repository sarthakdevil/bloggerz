const express = require('express');
const app = express()
const parser = require('body-parser');
const mongoose = require('mongoose');
const { render } = require('ejs');
const path = require('path');
const fileupload = require('express-fileupload');

port=9000;

app.use(fileupload());
mongoose.connect('mongodb://127.0.0.1/todolistdb')

const itemschema={
    image:{
        type:String,
        required:true
    }
}
let Item=mongoose.model("Item",itemschema)
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/blog',(req,res)=>{
    res.render('postcreate');
})

app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/' + imagename;
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})
app.listen(port , function(){
    console.log(`http://localhost:${port}`)
})