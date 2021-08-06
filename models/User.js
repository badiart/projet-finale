const mongoose=require("mongoose");
const schema=mongoose.Schema;
const UserSchema= new schema({
name:{type:String,required:true},
lastname:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
imge:{type:String,required:false},
isAdmin:{type:Boolean,default:false}

})
module.exports=mongoose.model("user",UserSchema)