const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const income = new Schema({
    income: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
}, {
timestamps: true
});
const system_income = mongoose.model('system_income_expense', income);
module.exports = system_income;