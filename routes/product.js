const express=require('express')
const mongoose=require('mongoose')
const product = require('../models/product')
const {check,validationResult}=require("express-validator")
const router=express.Router()
//crude methode
//methode post
//description post a product
//path http://localhost:5000/product/
//params body

router.post('/',async(req,res)=>{
    try {
        const newproduct=  new product(req.body);
       const result=await  newproduct.save()
       res.send({response:result,message:"your product is added succesfully"})
    } catch (error) {console.log(error)}
        
})
//methode get
//description get all products
//path http://localhost:5000/product/
//params 

router.get('/',async(req,res)=>{
    try {
        const result=await product.find();
        res.send({result:result,message:"this is the product list "})
    } catch (error) {res.status(400).send("can not do it")
        
    }
})
//methode get one by id
//description get one product
//path http://localhost:5000/product/:id
//params id

router.get('/:id',async(req,res)=>{
     
    try {
        let result = await product.findOne({ _id: req.params.id });
        res.send({ response: result, message: "get one product succesfully" });
      } catch (error) {
        res.status(400).send("no product found with this id");
      }
    })
    //methode delete
    //description delete one product by id
    //path http://localhost:5000/product/:id
    //params id

    router.delete('/:id',async(req,res)=>{
        try {
            let result= await product.findOneAndDelete({_id:req.params.id});
            res.send({response:result,message:'the product is deleted succesfully'})
            console.log(result)
        }
            catch(error){res.status(400).send("can not delet it")}
        })
//methode put
//description update one product
//path http://localhost:5000/product/:id
//params id body

router.put('/:id',async(req,res)=>{
try{
    let result= await product.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body } });
        res.send(result)
        console.log(result)
    }
    catch(error){res.status(400).send("can not update product")}})


module.exports=router