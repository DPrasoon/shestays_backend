const express = require('express');
const router = express.Router();
const Accomodation = require('../models/Accomodation');

// Get All Accomodations route (Retrieve)
router.get('/', async (req, res) => {
    const accomodation = await Accomodation.find();
    res.json(accomodation);
})

// Get properties by parameter(city)
router.get('/get/:id', async (req, res) => {
    const properties = await Accomodation.find({ city: req.params.id });
    res.json(properties);
})

// Get details of property by id
router.get('/get_property_details/:id', async (req, res) => {
    const properties = await Accomodation.find({ _id: req.params.id });
    res.json(properties);
})

// Update a property's details
router.put('/update', async (req, res) => {
    const propertyUpdate = await Accomodation.updateOne(
        { _id: req.body._id },
        { $set: req.body }
    );
    res.json(propertyUpdate);
})

//exporting router so it can be used anywhere
module.exports = router;