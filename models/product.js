const express=require('express')
const mongoose=require('mongoose')
const { Schema } = mongoose;
// define a schema
const productSchema = new Schema({
    name: {type:String,required:true },
    email:{type:String,required:true},
    address:{type:String,required:true},
    phonenumber:{type:String,required:true},
    message:{type:String,required:true},
    photo:{ type: String,required:true},
    username:{type:String,required:true},
  });

  
  module.exports=product=mongoose.model('product', productSchema);