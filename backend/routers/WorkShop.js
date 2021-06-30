const router = require('express').Router();
let WorkShop = require('../models/WorkShop');

//add
// const date = new Date().toISOString().slice(0,10);
router.route('/add').post((req,res) => {
    const topic = req.body.topic;
    const organization = req.body.organization;
    const presenter = req.body.presenter;
    const qualification = req.body.qualification;
    const email = req.body.email;
    const phone = req.body.phone;
    const platform = req.body.platform;
    const date = req.body.date;
    const from_time = req.body.from_time;
    const to_time = req.body.to_time;
    const document = req.body.document;
    const description = req.body.description;
    const status ="Pending";

    const newWorkShop = new WorkShop({
        topic,
        organization,
        presenter,
        qualification,
        email,
        phone,
        platform,
        date,
        from_time,
        to_time,
        document,
        description,
        status
    })

    newWorkShop.save().then(() =>{
        res.json("Workshop Added");
    }).catch((err) => {
        console.log(err);
    })
})

//workshop->url
//view all (through table)
router.route("/view-all").get((req, res) => {
    WorkShop.find().then((WorkShop) => {
        res.json(WorkShop)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:id").put(async (req, res) => {
    let workshopId = req.params.id;
    const { topic, organization, presenter, qualification, email, phone, platform, date, from_time, to_time, document, description, status
    } = req.body;

    const updateWorkShop = {
        topic,
        organization,
        presenter,
        qualification,
        email,
        phone,
        platform,
        date,
        from_time,
        to_time,
        document,
        description, 
        status
    }

    const update = await WorkShop.findByIdAndUpdate(workshopId, updateWorkShop)
    .then(() => {
    res.status(200).send({status: "WorkShop Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating WorkShop", error: err.message});
    })
})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let workshopId = req.params.id;
    await WorkShop.findByIdAndDelete(workshopId)
        .then(() => {
            res.status(200).send({status: "WorkShop Deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete WorkShop", error});
        })
})

//view one workshop,s information
router.route("/get/:id").get(async (req, res) => {
    let workshopId = req.params.id;
    const wshop = await WorkShop.findById(workshopId)
    .then((WorkShop) => {
        res.status(200).send({status: "WorkShop fetched", WorkShop})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get WorkShop", error: err.message});
    })
})

module.exports = router;