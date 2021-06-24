const router = require('express').Router();
let AboutUs  = require('../models/AboutUs')

router.route('/add').post((req,res) => {
    const aboutus = req.body.aboutus;
    const date = req.body.date;
    const confDetail = req.body.confDetail;
    const start = req.body.start;
    const end = req.body.end;
    const website = req.body.website;
    const orgDetail = req.body.orgDetail;
    const phone = req.body.phone;
    const email = req.body.email;
    const orgWebsite = req.body.orgWebsite;

    const newAboutUs = new AboutUs({
        aboutus,
        date,
        confDetail,
        start,
        end,
        website,
        orgDetail,
        phone,
        email,
        orgWebsite
    });

    newAboutUs.save()
        .then(() => res.json("AboutUs added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    AboutUs.find()
        .then(AboutUs => res.json(AboutUs))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await AboutUs.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted about us."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting about us.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const aboutus = req.body.aboutus;
    const date = req.body.date;
    const confDetail = req.body.confDetail;
    const start = req.body.start;
    const end = req.body.end;
    const website = req.body.website;
    const orgDetail = req.body.orgDetail;
    const phone = req.body.phone;
    const email = req.body.email;
    const orgWebsite = req.body.orgWebsite;
    const updateAboutUs={
        aboutus,
        date,
        confDetail,
        start,
        end,
        website,
        orgDetail,
        phone,
        email,
        orgWebsite
    }
    const update = await AboutUs.findOneAndUpdate({_id:id},updateAboutUs).then(() => {
        res.status(200).send({status: "Successfully updated about us"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating about us.", error: err.message});
    });
});

module.exports = router;