const express = require('express');
const router = express.Router();
const AreaManager = require('../models/AreaManager');
const ownerInfoReq = require('../models/OwnerInfoRequests');

// login am by id
router.get('/get/:id', async (req, res) => {
    const am_details = await AreaManager.find({ email: req.params.id });
    res.json(am_details);
})

// get am detail by id
router.get('/get_am_detail/:id', async (req, res) => {
    const am_details = await AreaManager.find({ _id: req.params.id });
    res.json(am_details);
})

//add owner info requests
router.post('/ownerInfoReq', async (req, res) => {
    const newReq = new ownerInfoReq(
        req.body
    );
    const savedReq = await newReq.save();
    res.json(savedReq); // respond with json to our post endpoint
});

// get owner requests
router.get('/view_owner_info_requests', async (req, res) => {
    const owner_req = await ownerInfoReq.find();
    res.json(owner_req);
})

// Update a am profile
router.put('/update', async (req, res) => {
    const amUpdate = await AreaManager.updateOne(
        { _id: req.body._id },
        { $set: req.body }
    );
    res.json(amUpdate);
})

//exporting router so it can be used anywhere
module.exports = router