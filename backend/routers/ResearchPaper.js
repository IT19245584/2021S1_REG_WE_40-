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
    const status ="Pending";

    const newResearchPaper = new ResearchPaper({
        topic,
        university,
        purpose,
        team_leader,
        email,
        phone,
        document,
        description,
        status
    })

    newResearchPaper.save().then(() => {
        res.json("Research Paper Added");
    }).catch((err) => {
        console.log(err);
    })
})

//view all ResearchPaper (through table)
router.route("/view-all").get((req, res) => {
    ResearchPaper.find().then((ResearchPaper) => {
        res.json(ResearchPaper)
    }).catch((err) => {
        console.log(err);
    })
})

//update
router.route("/update/:id").put(async (req, res) => {
    let researchpaperId = req.params.id;
    const {  topic, university, purpose, team_leader, email, phone, document, description, status
    } = req.body;
    // const status ="Pending";

    const updateResearchpaper = {
        topic,
        university,
        purpose,
        team_leader,
        email,
        phone,
        document,
        description,
        status
    }

    const update = await ResearchPaper.findByIdAndUpdate(researchpaperId, updateResearchpaper)
    .then(() => {
    res.status(200).send({status: "ResearchPaper Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating ResearchPaper", error: err.message});
    })
})

/delete
router.route("/delete/:id").delete(async (req, res) => {
    let researchpaperId = req.params.id;
    await ResearchPaper.findByIdAndDelete(researchpaperId)
        .then(() => {
            res.status(200).send({status: "ResearchPaper Deleted"});
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete ResearchPaper", error});
        })
})

//view one ResearchPaper,s information
router.route("/get/:id").get(async (req, res) => {
    let researchpaperId = req.params.id;
    const rpaper = await ResearchPaper.findById(researchpaperId)
    .then((ResearchPaper) => {
        res.status(200).send({status: "ResearchPaper fetched", ResearchPaper})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get ResearchPaper", error: err.message});
    })
})

module.exports = router;