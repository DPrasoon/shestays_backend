const mongoose = require('mongoose')

//schema
const QuerySchema = new mongoose.Schema({
    name:String,
    email:String,
    query:String,
    am_id:String,
})

module.exports = mongoose.model('query', QuerySchema);