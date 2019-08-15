const Mongoose = require("mongoose");
const menuModel=new mongoose.Schema({
    
        itemname:String,
        price:String,
        description:String
    })