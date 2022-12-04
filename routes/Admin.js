const express = require('express');
const router = express.Router();
const AreaManager = require('../models/AreaManager')
const Admin = require('../models/Admin')
const Feedback = require('../models/Feedback')
const Query = require('../models/Query')
const User = require('../models/User');

// Create new AreaManager  (Create)
router.post('/am_registration', async (req, res) => {

    const newAM = new AreaManager(
        req.body 
    );
    const savedAM = await newAM.save(); 
    res.json(savedAM); // respond with json to our post endpoint
});

// login admin by email
router.get('/get/:id', async (req, res) => {
    const admin_details = await Admin.find({ email: req.params.id });
    res.json(admin_details);
})

// get admin detail by id
router.get('/get_admin/:id', async (req, res) => {
    const admin_details = await Admin.find({ _id: req.params.id });
    res.json(admin_details);
})

// Get all messages 
router.get('/view_queries', async (req, res) => {
    const query = await Query.find();
    res.json(query);
})

// Get all feedbacks
router.get('/view_feedback', async (req, res) => {
    const feedback = await Feedback.find();
    res.json(feedback);
})

// Get all AMs Profiles 
router.get('/view_am_profiles', async (req, res) => {
    const am_profiles = await AreaManager.find();
    res.json(am_profiles);
})

// Get all User Profiles 
router.get('/view_user_profiles', async (req, res) => {
    const user_profiles = await User.find();
    res.json(user_profiles);
})

// Delete an am by id
router.delete('/delete_am/:id', async (req, res) => {
    const amDelete = await AreaManager.findByIdAndDelete({_id:req.params.id});
    res.json(amDelete);
})
// Delete a user by id
router.delete('/delete_user/:id', async (req, res) => {
    const userDelete = await User.findByIdAndDelete({_id:req.params.id});
    res.json(userDelete);
})
// Delete a feedback by id
router.delete('/delete_feedback/:id', async (req, res) => {
    const feedbackDelete = await Feedback.findByIdAndDelete({_id:req.params.id});
    res.json(feedbackDelete);
})

//exporting router so it can be used anywhere
module.exports = router