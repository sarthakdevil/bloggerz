const express = require('express');
const app = express()
const parser = require('body-parser');
const mongoose = require('mongoose');
const { render } = require('ejs');
const multer = require('multer');
const fs = require('fs');
const fileupload = require('express-fileupload');
const path = require('path')
port=9000;

app.use(fileupload());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/blog',(req,res)=>{
    res.render('postcreate');
})
  
  app.use(express.json());
  
  app.post('/submit',(req,res)=>{
    const {heading,subheading,content}=req.body
    const
  })

app.listen(port , function(){
    console.log(`http://localhost:${port}`)
})
module.exports={app};