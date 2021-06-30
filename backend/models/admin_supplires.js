const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    email: {
    type: String,
    required: true,
    unique: true
    },

    name: {
    type: String,
    required: true
    },

    address: {
    type: String,
    required: true
    }
    ,

    tel1: {
    type: String,
    required: true
    },

    tel2: {
    type: String,
    required: false
    },

    supplyItem1: {
        type: String,
        required: true
    },

    supplyItem2: {
        type: String,
        required: false
    },

    supplyItem3: {
        type: String,
        required: false
    },

    comment: {
        type: String,
        required: false
    },
}, {
timestamps: true
});
const system_admin_supplirer = mongoose.model('system_admin_supplirer', supplierSchema);
module.exports = system_admin_supplirer;