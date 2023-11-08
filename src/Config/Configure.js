const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("connected to mongo db")
})
.catch((error)=>{
    console.log(error,"error -----")
})
module.exports = mongoose.connection