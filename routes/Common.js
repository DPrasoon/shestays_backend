const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Feedback = require('../models/Feedback')
const Query = require('../models/Query');
const { set } = require('mongoose');


// Create new user  
router.post('/user_registration', async (req, res) => {
    const newUser = new User(
        req.body 
    );
    try {
        const savedUser = await newUser.save() // mongo save method
        res.json(savedUser) // respond with json to our post endpoint
    } catch (error) {
        res.status(400).send(error);
    }
    
});

// Update a user profile
router.put('/update', async (req, res) => {
    const tUpdate = await User.updateOne(
        { _id: req.body._id },

        { $set: req.body }
    )
    res.json(tUpdate)
})

// login user by email
router.get('/get/:id', async (req, res) => {
    const t = await User.find({ email: req.params.id })
    res.json(t)
})

// get am detail by id
router.get('/get_user_detail/:id', async (req, res) => {
    const t = await User.find({ _id: req.params.id })
    res.json(t)
})

//add new feedback
router.post('/feedback', async (req, res) => {

    const newFeedback = new Feedback(
        req.body 
    );
    const savedFeedback = await newFeedback.save() // mongo save method
    res.json(savedFeedback) // respond with json to our post endpoint
});

//add new message
router.post('/contact', async (req, res) => {
    
    const newQuery = new Query(
        req.body 
    );
    const savedQuery = await newQuery.save() // mongo save method
    res.json(savedQuery) // respond with json to our post endpoint
});


//exporting router so it can be used anywhere
module.exports = router