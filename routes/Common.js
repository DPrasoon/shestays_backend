const express = require('express');
const router = express.Router();
const User = require('../models/User')
const Feedback = require('../models/Feedback')
const Query = require('../models/Query')

// Get All Accomodations route (Retrieve)
// router.get('/', async (req, res) => {
//     const accomodation = await Accomodation.find();
//     res.json(accomodation);
// })

// Create new user  
router.post('/user_registration', async (req, res) => {

    const newUser = new User(
        req.body 
    );
    const savedUser = await newUser.save() // mongo save method
    res.json(savedUser) // respond with json to our post endpoint
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

// Getter by id
// router.get('/get/:id', async (req, res) => {
//     const t = await Todo.findById({ _id: req.params.id })
//     res.json(t)
// })

// Delete a todo by id
// router.delete('/delete/:id', async (req, res) => {
//     const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id })
//     res.json(tDelete)
// })

// Update a todo by id
// router.put('/update/:id', async (req, res) => {
//     const tUpdate = await Todo.updateOne(
//         { _id: req.params.id },

//         // { $set: req.body }
//         {
//            author: "UpdateEngine",
//            todo: "Coding"
//          }
//     )
//     res.json(tUpdate)
// })


//exporting router so it can be used anywhere
module.exports = router