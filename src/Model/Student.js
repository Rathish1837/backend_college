const mongoose = require('mongoose');
const {v4:uuid} = require('uuid')
const registerSchema = new mongoose.Schema({
  
    _id:{
        type: String,
        default: uuid
    },
  
    Name: {
        type: String
    },
    StudentID:{
        type:String
    },
    Department:{
        type:String
    },
    mobile:{
        type:Number
    },
    active:{
        type: Boolean,
        default: true

    }
});
const register = mongoose.model('Student',registerSchema);
module.exports = register;