const mongoose = require('mongoose')

//schema
const AMSchema = new mongoose.Schema({
    full_name:String,
    email:String,
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
module.exports = mongoose.model('areaManager', AMSchema);