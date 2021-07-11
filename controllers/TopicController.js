const { validationResult } = require("express-validator");
const ResponseService = require('../services/ApiService')
const TopicService = require('../services/TopicService')

module.exports = {
    subscribeToTopic: async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return ResponseService.send(
                422,
                res,
                "One or more validation errors occurred",
                null,
                errors.array({ onlyFirstError: true })
            );
        }

        try {
            const { topic } = req.params
            const { url } = req.body
            const topicFromDb = await TopicService.findByTitle(topic);
            if (!topicFromDb) {
                return ResponseService.send(404, res, 'Topic does not exist', null);
            }
            await TopicService.subscribeToTopic(topicFromDb, url);
            return ResponseService.send(201, res, 'Successfully subscribed to topic', { topic, url }, null);
        } catch (ex) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while subscribing to topic', null, {
                msg: err
            })
        }
    },
    createTopic: async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return ResponseService.send(
                422,
                res,
                "One or more validation errors occurred",
                null,
                errors.array({ onlyFirstError: true })
            );
        }
        try {
            const { topic } = req.body
            const topicFromDb = await TopicService.findByTitle(topic);
            if (!topicFromDb) {
                return ResponseService.send(400, res, 'Topic with same title already exists', null);
            }
            return ResponseService.send(201, res, 'Successfully created new topic', { topic }, null);
        } catch (ex) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while subscribing to topic', null, {
                msg: err
            })
        }

    },
    publishTopic: async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return ResponseService.send(
                422,
                res,
                "One or more validation errors occurred",
                null,
                errors.array({ onlyFirstError: true })
            );
        }
        try {
            const { topic } = req.params
            const message = req.body;

            const topicFromDb = await TopicService.findByTitle(topic);
            if (!topicFromDb) {
                return ResponseService.send(404, res, 'Topic does not exist', null);
            }
            const subscribers = topicFromDb.subscribers || []
            if (subscribers.length > 0) {
                await TopicService.publishToSubscribers(subscribers, topic, message)
            }
            return ResponseService.send(200, res, `Successfully published topic to ${subscribers.length} subscribers`, { topic }, null);
        } catch (ex) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while publishing topic', null, {
                msg: err
            })
        }

    }
}