const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 6060

app.use(cors())
app.use(express.json())

const url = process.env.ATLAS_URI
global.URL = url

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.once("open", () => {
  console.log("MongoDB connection successfully")
})

const admin_accept_budject = require('./routers/admin_accept_budject.js');
app.use('/admin_accept_budject', admin_accept_budject);

const admin_side_user = require('./routers/admin_side_user');
app.use('/admin_side_user', admin_side_user);

const OrganizingCommittee = require("./routers/OrganizingCommittee")
app.use("/orgCommittee", OrganizingCommittee)

const TechnicalCommittee = require("./routers/TechnicalCommittee")
app.use("/techCommittee", TechnicalCommittee)

const AboutUs = require("./routers/AboutUs")
app.use("/aboutus", AboutUs)

const ImportantDates = require("./routers/ImportantDates")
app.use("/importantDates", ImportantDates)

const GuestSpeaker = require("./routers/GuestSpeaker")
app.use("/guestSpeaker", GuestSpeaker)

const KeynoteSpeaker = require("./routers/KeynoteSpeaker")
app.use("/keynoteSpeaker", KeynoteSpeaker)

const workshops = require("./routers/WorkShop.js")
app.use("/workshop", workshops)

const ResearchPaper = require("./routers/ResearchPaper")
app.use("/researchPaper", ResearchPaper)

const PastProceeding = require("./routers/PastProceeding")
app.use("/pastProceeding", PastProceeding)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

//Contact Us Email sending configuration
app.post("/contactdata", (req, res) => {
  let data = req.body
  let smtpTransoprt = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "applicationframework2021@gmail.com",
      pass: "applicationaf2@",
    },
  })
  let mailOptions = {
    from: data.email,
    to: "applicationframework2021@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
        <h3>Informations</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            <li>Subject: ${data.subject}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        `,
  }
  smtpTransoprt.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err)
    } else {
      res.send(info)
    }
  })
  smtpTransoprt.close()
})
