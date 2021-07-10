const { check } = require("express-validator");

module.exports = {
    createTopic: () => [
        check("topic", 'The topic is required').not().isEmpty().isLength({ min: 3 })
    ],
    subscribeToTopic: () => [
        check("url", 'The topic is required').not().isEmpty().isURL()
    ],
}