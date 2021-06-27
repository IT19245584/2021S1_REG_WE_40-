const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeynoteSpeakerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Keynote_Speaker_Schema = mongoose.model('Keynote_Speaker_Schema',KeynoteSpeakerSchema);
module.exports = Keynote_Speaker_Schema;