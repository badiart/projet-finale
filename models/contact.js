const mongoose=require("mongoose");
const schema=mongoose.Schema;
const contactSchema= new schema({
name:{type:String,required:true},
lastname:{type:String,required:true},
email:{type:String,required:true},
number:{type:String,required:true},
message:{type:String,required:false},

})
module.exports=mongoose.model("contact",contactSchema)