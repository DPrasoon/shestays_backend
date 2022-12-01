const mongoose = require('mongoose')

//schema

const AMSchema = new mongoose.Schema({
    email:String,
    phone:Number,
    password:String, //---------------check this
})

//exporting todo field from TodosSchema
module.exports = mongoose.model('admin', AMSchema);