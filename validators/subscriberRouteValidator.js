const { check } = require("express-validator");

module.exports = {
    validateRequest: () => [
        check("topic", 'The topic field is required').not().isEmpty().isLength({ min: 3 })
    ],
}