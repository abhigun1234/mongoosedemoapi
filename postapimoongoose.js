
//create expree server 
var Express = require("express");
var app = Express();

app.listen(3000, () => {
    console.log("Listening at :3000...");
});

//connect wit mongodb database
const Mongoose = require("mongoose");

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/hotels').then(()=>
console.log('connected  to mongodb')
)

//post api
const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.post("/addroom", function (request, response) {
    try {
        const roomModel=new mongoose.Schema({
            
                name:String,
                price:String,
                description:String
            })
        console.log(request.body)
        const Room=mongoose.model('Room',roomModel)
         //var menu = new menuModel(request.body);
         const room=new Room(request.body)
         //console.log(menu)
          var result =  room.save();
          response.send("result");
    } catch (error) {
        response.status(500).send(error);
        console.log(error)
    }
});
