const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    email: String,
    message: String,
    file: String,
});

const model = mongoose.model('Message', MessageSchema);
module.exports = model;