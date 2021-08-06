const express=require("express")
const router=express.Router()
const {loginRules,registerRules,validation}=require("../middleware/validator")
const isAuth=require("../middleware/passport")
const isAdmin=require("../middleware/passport")
const controllers =require("../controllers/user")
const user=require("../models/User")
//test
// router.get("/",(req,res)=>{
//     res.send("hello world")
// })
//register :add and save user
//description:method post
//path:http://localhost:5000/user/register
//params:body
router.post("/register",registerRules(),validation,controllers.register );


//login
router.post ("/login",loginRules(),validation,controllers.login);


//get current user
router.get("/current",isAuth(),controllers.current);
//the user edit
//methode put
//description update one product
//path http://localhost:5000/product/:id
//params id body

router.put('/:id',async(req,res)=>{
    try{
        let result= await user.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body } });
            res.send(result)
            console.log(result)
        }
        catch(error){res.status(400).send("can not update user")}})
    //get user
    //methode get
//description get all user
//path http://localhost:5000/user/
//params 

router.get('/',async(req,res)=>{
    try {
        const result=await user.find();
        res.send({result:result,message:"this is the user list "})
    } catch (error) {res.status(400).send("can not do it")
    console.log(error)
        
    }
})
//methode delete
    //description delete one product by id
    //path http://localhost:5000/product/:id
    //params id

    router.delete('/:id',async(req,res)=>{
        try {
            let result= await user.findOneAndDelete({_id:req.params.id});
            res.send({response:result,message:'the user is deleted succesfully'})
            console.log(result)
        }
            catch(error){res.status(400).send("can not delet it")}
        })
module.exports=router