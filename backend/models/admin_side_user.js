const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const systemRegSchema = new Schema({
    email: {
    type: String,
    required: true,
    unique: true
    },

    password: {
    type: String,
    required: true
    },

    type: {
    type: String,
    required: true
    },

    status: {
        type: String,
        required: true
    },
}, {
timestamps: true
});
const system_admin_side_user_Schema = mongoose.model('system_admin_side_user', systemRegSchema);
module.exports = system_admin_side_user_Schema;