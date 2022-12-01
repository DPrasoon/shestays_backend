const express = require('express');
const router = express.Router();
const Accomodation = require('../models/Accomodation')

// Get All Accomodations route (Retrieve)
router.get('/', async (req, res) => {
    const accomodation = await Accomodation.find();
    res.json(accomodation);
})

// Create new Todo  (Create)
router.post('/new', async (req, res) => {

    const newAccomodation = new Accomodation(
        req.body // What the Vue App is sending
        // { // pass in body content to be stored in DB
        //     author:"Rambo", 
        //     todo:"Do exercise"
        //   }
    );
    const savedAccomodation = await newAccomodation.save() // mongo save method
    res.json(savedAccomodation) // respond with json to our post endpoint
});

// Get properties by parameter(city)
router.get('/get/:id', async (req, res) => {
    const t = await Accomodation.find({ city: req.params.id })
    res.json(t)
})
// Get details of property by id
router.get('/get_property_details/:id', async (req, res) => {
    const t = await Accomodation.find({ _id: req.params.id })
    res.json(t)
})


// Delete a todo by id
// router.delete('/delete/:id', async (req, res) => {
//     const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id })
//     res.json(tDelete)
// })

// Update a property security rating
router.put('/update', async (req, res) => {
    const tUpdate = await Accomodation.updateOne(
        { _id: req.body._id },

        { $set: req.body }
    )
    res.json(tUpdate)
})


//exporting router so it can be used anywhere
module.exports = router