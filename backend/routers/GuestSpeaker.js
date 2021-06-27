const router = require('express').Router();
let GuestSpeaker = require('../models/GuestSpeaker');

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const image = req.body.image;
    const profession = req.body.profession;
    const description = req.body.description;
    const status = req.body.status;
    const date = new Date().toISOString().slice(0,10);

    const newGuestSpeaker = new GuestSpeaker({
        name,
        image,
        profession,
        description,
        status,
        date
    });

    newGuestSpeaker.save()
        .then(() => res.json("Guest speaker added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    GuestSpeaker.find()
        .then(GuestSpeaker => res.json(GuestSpeaker))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await GuestSpeaker.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted guest speaker."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting guest speaker.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const name = req.body.name;
    const profession = req.body.profession;
    const description = req.body.description;
    const status = req.body.status;
    const updateGuestSpeaker={
        name,
        profession,
        description,
        status
    }
    const update = await GuestSpeaker.findOneAndUpdate({_id:id},updateGuestSpeaker).then(() => {
        res.status(200).send({status: "Successfully updated guest speaker"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating guest speaker.", error: err.message});
    });
});

module.exports = router;