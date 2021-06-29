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
        description

    })

    newWorkShop.save().then(() =>{
        res.json("Workshop Added");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;