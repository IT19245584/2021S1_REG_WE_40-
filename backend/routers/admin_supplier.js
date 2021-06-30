const router = require('express').Router();
let admin_supplires = require('../models/admin_supplires');

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const name = req.body.name;
    const address = req.body.address;
    const tel1 = req.body.tel1;
    const tel2 = req.body.tel2;
    const supplyItem1 = req.body.supplyItem1;
    const supplyItem2 = req.body.supplyItem2;
    const supplyItem3 = req.body.supplyItem3;
    const comment = req.body.comment;
    
    const newadmin_suppliresr = new admin_supplires({
         email,
         name,
         address,
         tel1,
         tel2,
         supplyItem1,
         supplyItem2,
         supplyItem3,
         comment
    });

    newadmin_suppliresr.save()
        .then(() => res.json("Supplier Added"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    admin_supplires.find()
        .then(admin_supplires => res.json(admin_supplires))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

module.exports = router;