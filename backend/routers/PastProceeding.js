const router = require('express').Router();
let PastProceeding = require('../models/PastProceeding');

router.route('/add').post((req,res) => {
    const image = req.body.image;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date().toISOString().slice(0,10);

    const newPastProceeding = new PastProceeding({
        image,
        description,
        status,
        date
    });

    newPastProceeding.save()
        .then(() => res.json("Past Proceeding added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    PastProceeding.find()
        .then(PastProceedingMember => res.json(PastProceedingMember))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await PastProceeding.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted past proceeding."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting past proceeding.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const image = req.body.image;
    const description = req.body.description;
    const status = req.body.status;
    const updatePastProceeding={
        image,
        description,
        status
    }
    const update = await PastProceeding.findOneAndUpdate({_id:id},updatePastProceeding).then(() => {
        res.status(200).send({status: "Successfully updated Past proceedingr"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating past proceeding.", error: err.message});
    });
});

module.exports = router;