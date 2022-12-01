const express = require('express');
const router = express.Router();
const AreaManager = require('../models/AreaManager')
const OwnerInfoReq = require('../models/OwnerInfoRequests')

// Get All Accomodations route (Retrieve)
// router.get('/', async (req, res) => {
//     const accomodation = await Accomodation.find();
//     res.json(accomodation);
// })

// Create new AreaManager  (Create)
// router.post('/login_am', async (req, res) => {

//     const newAM = new AreaManager(
//         req.body 
//     );
//     const savedAM = await newAM.save() // mongo save method
//     res.json(savedAM) // respond with json to our post endpoint
// });

// login am by id
router.get('/get/:id', async (req, res) => {
    const t = await AreaManager.find({ email: req.params.id })
    res.json(t)
})

// get am detail by id
router.get('/get_am_detail/:id', async (req, res) => {
    const t = await AreaManager.find({ _id: req.params.id })
    res.json(t)
})

//add owner info requests
router.post('/ownerInfoReq', async (req, res) => {
    console.log(req.body);
    const newReq = new OwnerInfoReq(
        req.body 
    );
    const savedReq = await newReq.save() // mongo save method
    res.json(savedReq) // respond with json to our post endpoint
});

// get owner requests
router.get('/view_owner_info_requests', async (req, res) => {
    const t = await OwnerInfoReq.find()
    res.json(t)
})

// Update a am profile
router.put('/update', async (req, res) => {
    const tUpdate = await AreaManager.updateOne(
        { _id: req.body._id },

        { $set: req.body }
    )
    res.json(tUpdate)
})

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