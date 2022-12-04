const mongoose = require('mongoose')

//schema
const AMSchema = new mongoose.Schema({
    email:String,
    phone:Number,
    password:String,
})

module.exports = mongoose.model('admin', AMSchema);