const User =require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


//register function
exports.register= async(req,res)=>{
    const {name,lastname,email,password,imge,isAdmin}=req.body;
    try {
const newuser= new User( {name,lastname,email,password,imge,isAdmin})
//check if the email exist

const searcheduser=await User.findOne({email})
if (searcheduser){
    return res.status(400).send({message:"email is already exist"})
}
        //HASH PASSWORD
const salt=10;
const genSalt=await bcrypt.genSalt(salt);
const hashedpassword=await bcrypt.hash(password,genSalt)
console.log(hashedpassword)
newuser.password=hashedpassword;
//generate a token
      //save the user
const newuserToken=await newuser.save();
const payload={
    _id:newuserToken._id,
    name:newuserToken.name
}
const token= await jwt.sign(payload,process.env.secretOrKey,{
    expiresIn:3600
})
res.status(200).send({user:newuserToken,message:"user is saved",token:`Bearer ${token}`})
    } catch (error) {
        res.status(500).send({message:"can not save the user",error:error})
        // res.send({error:error})
        console.log(error)
    }

}



//login function

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try {
      //if the user exist
      const searcheduser= await User.findOne({email});
      //if the email not exist
      if(!searcheduser){return res.status(400).send({message:"bad credential"})}
      //password are equals
      const match =await  bcrypt.compare(password,searcheduser.password)
      if(!match){return res.status(400).send({message:"bad credential"})}

//create a token
const payload={
    _id:searcheduser._id,
    name:searcheduser.name
}
const token= await jwt.sign(payload,process.env.secretOrKey,{
    expiresIn:3600
})
      //send the user  
      res.status(200).send({user:searcheduser,message:"success",token:`Bearer ${token}`})
    }
     catch (error) {
        res.status(500).send({message:"can not get the user"})
        console.log(error)
        }
    }

//current function
exports.current =(req,res)=>{
    res.status(200).send({user:req.user})
};