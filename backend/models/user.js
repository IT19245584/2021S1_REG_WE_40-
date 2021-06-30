const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const systemRegSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    nic: {
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
const system_Reg_Schema = mongoose.model('system_reg', systemRegSchema);
module.exports = system_Reg_Schema;