const Topic = require('../models/TopicSchema')

module.exports = {

    subscribeToTopic: async(topic, url) => {
        try {
            topic.subscribers.push({ url })
            return await topic.save()
        } catch (ex) {
            throw ex;
        }
    },
    findByTitle: async(title) => {
        try {
            return await Topic.findOne({ title });
        } catch (err) {
            console.log(err)
            return null;
        }
    },
    saveTopic: (title) => {
        try {
            return await new Topic({ title }).save();
        } catch (err) {
            console.log(err)
            throw err;
        }
    },
    publishToSubscribers: async(subscribers, topic, data) => {
        const requestBody = { topic, data };
        for (const subscriber of subscribers) {
            try {
                await axios.post(subscriber.url, requestBody);
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
}