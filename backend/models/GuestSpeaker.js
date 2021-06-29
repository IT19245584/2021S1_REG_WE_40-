const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSpeakerSchema = new Schema({
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

const Guest_Speaker_Schema = mongoose.model('Guest_Speaker_Schema',GuestSpeakerSchema);
module.exports = Guest_Speaker_Schema;