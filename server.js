const express=require ("express");
const connectDB=require("./config/dbConnect")
const app=express();
require('dotenv').config()
//connecting to database
connectDB();
//routes
app.use(express.json());
app.use("/user",require("./routes/user"))
app.use("/product",require("./routes/product"))
app.use("/contact",require("./routes/contact"))

// creating server
const port=process.env.port
app.listen(port,(error)=>{
    error? console.log(error):console.log(`server is running on ${port}`)
})