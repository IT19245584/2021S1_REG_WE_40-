const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImportantDatesSchema = new Schema({
    heading:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Important_Dates_Schema = mongoose.model('Important_Dates_Schema',ImportantDatesSchema);
module.exports = Important_Dates_Schema;