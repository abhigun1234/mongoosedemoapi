

//connecting to database
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/traveldb').then(()=>
console.log('connected  to mongodb')
)


async function  addPlace()
{    //console.log(itemName)
    const placeSchema=new mongoose.Schema({
        
            name:String,
            distence:String,
            description:String
        })
        const Places=mongoose.model('places',placeSchema)
        
        
        const place=new Places({name:'manali',distence:'3000',description:'manali in himachal'})
      
        const result= await place.save()
        console.log(result)
        

}

addPlace()
// createMenu()