const { check } = require("express-validator");

module.exports = {
    createTopic: () => [
        check("topic", 'The topic field is required').not().isEmpty().isLength({ min: 3 })
    ],
    subscribeToTopic: () => [
        check("url", 'The url field is required and must be a valid url').not().isEmpty().isURL()
    ],
}