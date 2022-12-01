const mongoose = require('mongoose')

//schema
const AccomodationSchema = new mongoose.Schema({
    property_name: String,
    property_type: String,
    address: String,
    rating: Number,
    about: String,
    facilities: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    security_rating: String,
    local_police_contact:String,
    local_tiffin_service:String,
    local_water_supply_service:String,
    owner_name:String,
    owner_phone:String,
    owner_email:String,
    city: String,

})
//exporting todo field from TodosSchema
module.exports = mongoose.model('accomodation', AccomodationSchema);