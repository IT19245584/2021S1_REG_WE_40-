const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizingCommitteeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    department:{
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

const Organizing_Committee_Schema = mongoose.model('Organizing_Committee_Schema',OrganizingCommitteeSchema);
module.exports = Organizing_Committee_Schema;