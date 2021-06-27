const router = require('express').Router();
let OrganizingCommittee = require('../models/OrganizingCommittee');

router.route('/addOrgCommittee').post((req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const department = req.body.department;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date().toISOString().slice(0,10);

    const newOrganizingCommittee = new OrganizingCommittee({
        name,
        image,
        department,
        description,
        status,
        date
    });

    newOrganizingCommittee.save()
        .then(() => res.json("Organizing Committee member added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/viewOrganizingCommittee').get((req,res) => {
    OrganizingCommittee.find()
        .then(OrganizingCommitteeMember => res.json(OrganizingCommitteeMember))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/deleteOrganizingCommittee/:id').delete(async (req,res) => {
    let id = req.params.id;
    await OrganizingCommittee.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted organizing committee member."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting organizing committee member.", error: err.message});
    }); 
});

router.route('/updateOrganizingCommittee/:id').post(async (req,res) => {
    let id = req.params.id;
    const name = req.body.name;
    const department = req.body.department;
    const description = req.body.description;
    const status = req.body.status;
    const updateOrganizingCommittee={
        name,
        department,
        description,
        status
    }
    const update = await OrganizingCommittee.findOneAndUpdate({_id:id},updateOrganizingCommittee).then(() => {
        res.status(200).send({status: "Successfully updated organizing committee member"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating organizing committee member.", error: err.message});
    });
});

module.exports = router;