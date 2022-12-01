const express = require('express');
const router = express.Router();
const AreaManager = require('../models/AreaManager')
const Admin = require('../models/Admin')
const Feedback = require('../models/Feedback')
const Query = require('../models/Query')
const User = require('../models/User');

// Get All Accomodations route (Retrieve)
// router.get('/', async (req, res) => {
//     const accomodation = await Accomodation.find();
//     res.json(accomodation);
// })

// Create new AreaManager  (Create)
router.post('/am_registration', async (req, res) => {

    const newAM = new AreaManager(
        req.body 
    );
    const savedAM = await newAM.save() // mongo save method
    res.json(savedAM) // respond with json to our post endpoint
});

// login admin by email
router.get('/get/:id', async (req, res) => {
    const t = await Admin.find({ email: req.params.id })
    res.json(t)
})

// get admin detail by id
router.get('/get_admin/:id', async (req, res) => {
    const t = await Admin.find({ _id: req.params.id })
    res.json(t)
})

// Get All message 
router.get('/view_queries', async (req, res) => {
    const query = await Query.find();
    res.json(query);
})

// Get All feedback 
router.get('/view_feedback', async (req, res) => {
    const feedback = await Feedback.find();
    res.json(feedback);
})

// Get All AMs Profiles 
router.get('/view_am_profiles', async (req, res) => {
    const am_profiles = await AreaManager.find();
    res.json(am_profiles);
})

// Get All user Profiles 
router.get('/view_user_profiles', async (req, res) => {
    const user_profiles = await User.find();
    res.json(user_profiles);
})

// Update a am profile
// router.put('/update', async (req, res) => {
//     const tUpdate = await Admin.updateOne(
//         { _id: req.body._id },

//         { $set: req.body }
//     )
//     res.json(tUpdate)
// })

// Delete a am by id
router.delete('/delete_am/:id', async (req, res) => {
    // console.log(req.params.id);
    // const _id = req.params.id;
    const tDelete = await AreaManager.findByIdAndDelete({_id:req.params.id})
    res.json(tDelete)
})
// Delete a user by id
router.delete('/delete_user/:id', async (req, res) => {
    // console.log(req.params.id);
    // const _id = req.params.id;
    const tDelete = await User.findByIdAndDelete({_id:req.params.id})
    res.json(tDelete)
})
// Delete a feedback by id
router.delete('/delete_feedback/:id', async (req, res) => {
    // console.log(req.params.id);
    // const _id = req.params.id;
    const tDelete = await Feedback.findByIdAndDelete({_id:req.params.id})
    res.json(tDelete)
})

//exporting router so it can be used anywhere
module.exports = router