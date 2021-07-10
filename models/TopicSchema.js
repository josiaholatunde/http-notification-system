const mongoose = require("mongoose");
const { Schema } = mongoose;
const SubscriberSchema = require('./SubscriberSchema')

const TopicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subscribers: [
        SubscriberSchema
    ]
});

module.exports = mongoose.model("Topic", TopicSchema);