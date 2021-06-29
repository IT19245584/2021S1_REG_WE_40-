const router = require('express').Router();
let ResearchPaper = require('../models/ResearchPaper');

router.route('/add').post((req,res) => {
    const topic = req.body.topic;
    const university = req.body.university;
    const purpose = req.body.purpose;
    const team_leader = req.body.team_leader;
    const email = req.body.email;
    const phone = req.body.phone;
    const document = req.body.document;
    const description = req.body.description;

    const newResearchPaper = new ResearchPaper({
        topic,
        university,
        purpose,
        team_leader,
        email,
        phone,
        document,
        description

    })

    newResearchPaper.save().then(() => {
        res.json("Research Paper Added");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;