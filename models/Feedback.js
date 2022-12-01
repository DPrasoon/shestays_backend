const mongoose = require('mongoose')

//schema
const FeedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    feedback:String,
    rating:String,
})

module.exports = mongoose.model('feedback', FeedbackSchema);