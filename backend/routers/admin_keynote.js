const router = require('express').Router();
let KeynoteSpeaker = require('../models/KeynoteSpeaker');

router.route('/view').get((req,res) => {
    KeynoteSpeaker.find()
        .then(KeynoteSpeaker => res.json(KeynoteSpeaker))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/update/:id').put(async (req,res) => {
    let id = req.params.id;
    const status = "Approved";
    const updateKeynoteSpeaker={
        status
    }
    const update = await KeynoteSpeaker.findOneAndUpdate({_id:id},updateKeynoteSpeaker).then(() => {
        res.status(200).send({status: "Successfully updated keynote speaker"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating keynote speaker.", error: err.message});
    });
});

module.exports = router;