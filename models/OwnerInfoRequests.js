const mongoose = require('mongoose')

//schema
const OwnerInfoRequestSchema = new mongoose.Schema({
    user_id: String,
    item_id: String,
    user_email: String,
    item_name: String,
})

module.exports = mongoose.model('ownerInfoReq', OwnerInfoRequestSchema);