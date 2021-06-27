const router = require('express').Router();
let KeynoteSpeaker = require('../models/KeynoteSpeaker');

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const profession = req.body.profession;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date().toISOString().slice(0,10);

    const newKeynoteSpeaker = new KeynoteSpeaker({
        name,
        image,
        profession,
        description,
        status,
        date
    });

    newKeynoteSpeaker.save()
        .then(() => res.json("Keynote speaker added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    KeynoteSpeaker.find()
        .then(KeynoteSpeaker => res.json(KeynoteSpeaker))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await KeynoteSpeaker.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted keynote speaker."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting keynote speaker.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const name = req.body.name;
    const profession = req.body.profession;
    const description = req.body.description;
    const status = req.body.status;
    const updateKeynoteSpeaker={
        name,
        profession,
        description,
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