const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workShopSchema = new Schema({
    topic: {
        type: String,
        required: true,
        unique: true
    },
    organization: {
        type: String,
        required: true
    },
    presenter: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true
    },
    phone: {
        type: Number,
        required: true
    },
    platform : {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    from_time: {
    type: String,
    required: true
    },
    to_time: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
        
}, {
timestamps: true
});
const WorkShop = mongoose.model('WorkShop', workShopSchema);
module.exports = WorkShop;