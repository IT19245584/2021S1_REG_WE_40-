const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchPaperSchema = new Schema({
    topic: {
        type: String,
        required: true,
        unique: true
    },
    university: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    team_leader: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true
    },
    phone: {
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
}, {
timestamps: true
});
const research_Paper_Schema = mongoose.model('research_Paper', researchPaperSchema);
module.exports = research_Paper_Schema;