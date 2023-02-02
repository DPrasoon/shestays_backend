const mongoose = require('mongoose')

//schema
const UserSchema = new mongoose.Schema({
    first_name:String,
    middle_name:String,
    last_name:String,
    gender:String,
    email:{type: String, index:true ,unique:true },
    phone:Number,
    address_line1:String,
    address_line2:String,
    address_line3:String,
    pincode:Number,
    city:String,
    state:String,
    country:String,
    password:String,
})

module.exports = mongoose.model('user', UserSchema);