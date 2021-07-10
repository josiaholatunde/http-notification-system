const { validationResult } = require("express-validator");

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

        } catch (ex) {

        }
    },
    createTopic: async(req, res, next) => {

    }
}