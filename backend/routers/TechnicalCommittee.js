const router = require('express').Router();
let TechnicalCommittee = require('../models/TechnicalCommittee');

router.route('/addTecCommittee').post((req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const department = req.body.department;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date().toISOString().slice(0,10);

    const newTechnicalCommittee = new TechnicalCommittee({
        name,
        image,
        department,
        description,
        status,
        date
    });

    newTechnicalCommittee.save()
        .then(() => res.json("Technical Committee member added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/viewTechnicalCommittee').get((req,res) => {
    TechnicalCommittee.find()
        .then(TechnicalCommitteeMember => res.json(TechnicalCommitteeMember))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/deleteTechnicalCommittee/:id').delete(async (req,res) => {
    let id = req.params.id;
    await TechnicalCommittee.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted technical committee member."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting technical committee member.", error: err.message});
    }); 
});

router.route('/updateTechnicalCommittee/:id').post(async (req,res) => {
    let id = req.params.id;
    const name = req.body.name;
    // const image = req.body.image;
    const department = req.body.department;
    const description = req.body.description;
    const status = req.body.status;
    const updateTechnicalCommittee={
        name,
        department,
        description,
        status
    }
    const update = await TechnicalCommittee.findOneAndUpdate({_id:id},updateTechnicalCommittee).then(() => {
        res.status(200).send({status: "Successfully updated technical committee member"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating technical committee member.", error: err.message});
    });
});

module.exports = router;