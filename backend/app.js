const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6060;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection successfully");
});

// const systemReg = require('./routes/systemReg');
// app.use('/systemReg', systemReg);

const OrganizingCommittee = require('./routers/OrganizingCommittee');
app.use('/orgCommittee',OrganizingCommittee);

const TechnicalCommittee = require('./routers/TechnicalCommittee');
app.use('/techCommittee',TechnicalCommittee);

const AboutUs = require('./routers/AboutUs');
app.use('/aboutus',AboutUs);

const ImportantDates = require('./routers/ImportantDates');
app.use('/importantDates',ImportantDates);

const GuestSpeaker = require('./routers/GuestSpeaker');
app.use('/guestSpeaker',GuestSpeaker);

const KeynoteSpeaker = require('./routers/KeynoteSpeaker');
app.use('/keynoteSpeaker',KeynoteSpeaker);

const workshops = require('./routers/WorkShop.js');
app.use('/workshop', workshops);

app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
});