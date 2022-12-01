const mongoose = require('mongoose')

//schema
const OwnerInfoRequestSchema = new mongoose.Schema({
    user_id: String,
    item_id: String,
})

module.exports = mongoose.model('ownerInfoReq', OwnerInfoRequestSchema);