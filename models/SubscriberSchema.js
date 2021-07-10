const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubscriberSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});

module.exports = SubscriberSchema