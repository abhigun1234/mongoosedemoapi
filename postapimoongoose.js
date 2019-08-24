
//create expree server 
var Express = require("express");
var app = Express();

app.listen(3000,'192.168.1.105', () => {
    console.log("Listening at :3000...");
});
// app.get('/hello',function(request,response){


//     request.send('hello world')
// })`

//connect wit mongodb database
const Mongoose = require("mongoose");

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/restro99').then(()=>
console.log('connected  to mongodb')
)

//post api
const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.post("/adduser", function (request, response) {
    try {//1
        const menuSchima=new mongoose.Schema({
            
                name:String,
                price:String,
                description:String
            })
        console.log(request.body)
        //2
        const Menu=mongoose.model('menu',menuSchima)
         //var menu = new rmenuModel(request.body);
         //3
         const menu=new User(request.body)
         //console.log(menu)
          var result =  menu.save();
          response.send("added user ");
    } catch (error) {
        response.status(500).send(error);
        console.log(error)
    }
});
