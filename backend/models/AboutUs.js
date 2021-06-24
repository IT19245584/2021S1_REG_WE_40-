const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema({
    aboutus:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    confDetail:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    orgDetail:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    orgWebsite:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const About_Us_Schema = mongoose.model('About_Us_Schema',AboutUsSchema);
module.exports = About_Us_Schema;