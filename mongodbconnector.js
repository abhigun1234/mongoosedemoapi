

//connecting to database
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/hotels').then(()=>
console.log('connected  to mongodb')
)


async function  addRoom()
{    //console.log(itemName)
    const roomSchema=new mongoose.Schema({
        
            name:String,
            price:String,
            description:String
        })
        const Room=mongoose.model('room',roomSchema)
        
        
        const room=new Room({name:'super cool room',price:'15000',description:'super cool room'})
      
      const result= await room.save()
        console.log(result)
        

}

addRoom()
// createMenu()