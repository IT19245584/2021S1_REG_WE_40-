const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PastProceedingSchema = new Schema({
    image:{
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

const Past_Proceeding_Schema = mongoose.model('Past_Proceeding_Schema',PastProceedingSchema);
module.exports = Past_Proceeding_Schema;