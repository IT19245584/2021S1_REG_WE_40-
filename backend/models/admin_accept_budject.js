const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const systemBudject = new Schema({
    income: {
        type: String,
        required: true,
    },
    expence: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
        unique:true
    },
}, {
timestamps: true
});
const systemBudject_Schema = mongoose.model('system_accept_Budject', systemBudject);
module.exports = systemBudject_Schema;