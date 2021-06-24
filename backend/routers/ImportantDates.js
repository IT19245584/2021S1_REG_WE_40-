const router = require('express').Router();
let ImportantDates = require('../models/ImportantDates');

router.route('/add').post((req,res) => {
    const heading = req.body.heading;
    const startDate = req.body.startDate;
    const dueDate = req.body.dueDate;
    const details = req.body.details;

    const newImportantDates = new ImportantDates({
        heading,
        startDate,
        dueDate,
        details
    });

    newImportantDates.save()
        .then(() => res.json("Important dates added successfully"))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/view').get((req,res) => {
    ImportantDates.find()
        .then(ImportantDates => res.json(ImportantDates))
        .catch(err => res.status(400).json('Error: ' +err)); 
});

router.route('/delete/:id').delete(async (req,res) => {
    let id = req.params.id;
    await ImportantDates.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Successfully deleted Important Dates."});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while deleting Important Dates.", error: err.message});
    }); 
});

router.route('/update/:id').post(async (req,res) => {
    let id = req.params.id;
    const heading = req.body.heading;
    const startDate = req.body.startDate;
    const dueDate = req.body.dueDate;
    const details = req.body.details;
    const updateImportantDates={
        heading,
        startDate,
        dueDate,
        details
    }
    const update = await ImportantDates.findOneAndUpdate({_id:id},updateImportantDates).then(() => {
        res.status(200).send({status: "Successfully updated Important Dates"});
    }).catch(err => {
        console.log(err);
        res.status(500).send({status: "Error while updating Important Dates.", error: err.message});
    });
});

module.exports = router;