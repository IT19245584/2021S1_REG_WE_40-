const router = require("express").Router()
let AboutUs = require("../models/AboutUs")

router.route("/add").post((req, res) => {
  const description = req.body.description;
  const dateRange = req.body.dateRange;
  const conferenceStart = req.body.conferenceStart;
  const conferenceEnd = req.body.conferenceEnd;
  const conferenceWebsite = req.body.conferenceWebsite;
  const organizerPhone = req.body.organizerPhone;
  const organizerEmail = req.body.organizerEmail;
  const organizerWebsite = req.body.organizerWebsite;
  const status = req.body.status;
  const date = new Date().toISOString().slice(0,10);

  const newAboutUs = new AboutUs({
    description,
    dateRange,
    conferenceStart,
    conferenceEnd,
    conferenceWebsite,
    organizerPhone,
    organizerEmail,
    organizerWebsite,
    status,
    date
  })

  newAboutUs
    .save()
    .then(() => res.json("AboutUs added successfully"))
    .catch((err) => res.status(400).json("Error : " + err))
})

router.route("/view").get((req, res) => {
  AboutUs.find()
    .then((AboutUs) => res.json(AboutUs))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id
  await AboutUs.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Successfully deleted about us." })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: "Error while deleting about us.", error: err.message })
    })
})

router.route("/update/:id").post(async (req, res) => {
  let id = req.params.id
  const description = req.body.description
  const dateRange = req.body.dateRange
  const conferenceStart = req.body.conferenceStart
  const conferenceEnd = req.body.conferenceEnd
  const conferenceWebsite = req.body.conferenceWebsite
  const organizerPhone = req.body.organizerPhone
  const organizerEmail = req.body.organizerEmail
  const organizerWebsite = req.body.organizerWebsite
  const status = req.body.status
  const updateRangeAboutUs = {
    description,
    dateRange,
    conferenceStart,
    conferenceEnd,
    conferenceWebsite,
    organizerPhone,
    organizerEmail,
    organizerWebsite,
    status,
  }
  const updateRange = await AboutUs.findOneAndUpdate({ _id: id }, updateRangeAboutUs)
    .then(() => {
      res.status(200).send({ status: "Successfully updated about us" })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: "Error while updating about us.", error: err.message })
    })
})

module.exports = router
