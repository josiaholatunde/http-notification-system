const { validationResult } = require("express-validator");
const ApiService = require('../services/ApiService')

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


            return ResponseService.send(201, res, 'Successfully created new user', createdUser, null);
        } catch (ex) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while subscribing to topic', null, {
                msg: err
            })
        }
    },
    createTopic: async(req, res, next) => {

    }
}