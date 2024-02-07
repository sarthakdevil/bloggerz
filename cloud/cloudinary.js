var fs = require("fs");
const Cloudinary = require('cloudinary')
const express =require('express');
var app=express();
Cloudinary.v2.config({
    cloud_name: 
    process.env.CLOUD,
    api_key:
    process.env.API_KEY,
    api_secret:
    process.env.API_SECRET
})

const uploadonCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        
        const response = await Cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log(`Image uploaded to ${response.secure_url}`);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}
PORT =9500;
app.listen(PORT,()=>{
    console.log(`cloud service is running on port ${PORT}`)
})
module.exports={uploadonCloudinary}