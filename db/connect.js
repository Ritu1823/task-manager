const mongoose = require('mongoose')

const connectionString =
'mongodb+srv://Ritu:Ritu2004@nodeexpressproject.aooibbp.mongodb.net/Task-Manager?retryWrites=true&w=majority'

mongoose.set('strictQuery',true);

const connectDB =(url) =>{
    return mongoose.connect(connectionString)
}





module.exports=connectDB
