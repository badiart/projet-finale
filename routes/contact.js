const express=require('express')
const mongoose=require('mongoose')
const product = require('../models/contact')
const {check,validationResult}=require("express-validator")
const contact = require('../models/contact')
const router=express.Router()
//crude methode
//methode post
//description post a contact
//path http://localhost:5000/contact/
//params body

router.post('/',async(req,res)=>{
    try {
        const newcontact=  new contact(req.body);
       const result=await  newcontact.save()
       res.send({response:result,message:"yourcontact is added succesfully"})
    } catch (error) {console.log(error)}
        
})
//methode get
//description get all contact
//path http://localhost:5000/contact/
//params 

router.get('/',async(req,res)=>{
    try {
        const result=await contact.find();
        res.send({result:result,message:"this is the contact list "})
    } catch (error) {res.status(400).send("can not do it")
        
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        let result= await contact.findOneAndDelete({_id:req.params.id});
        res.send({response:result,message:'the contact is deleted succesfully'})
        console.log(result)
    }
        catch(error){res.status(400).send("can not delet it")}
    })
   
module.exports=router