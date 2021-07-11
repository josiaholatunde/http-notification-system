const { validateRequest } = require("../../validators/subscriberRouteValidator")
const ResponseService = require('../../services/ApiResponseWrapper')

const subscriberRoutes = app => {

    app.post('/test1', validateRequest(), (req, res, next) => {

        const { topic } = req.body;
        console.log(JSON.stringify(req.body));
        return ResponseService.send(200, res, `Successfully received message for topic ${topic}`, null);
    })

    app.post('/test2', validateRequest(), (req, res, next) => {
        const { topic } = req.body;
        console.log(JSON.stringify(req.body));
        return ResponseService.send(200, res, `Successfully received message for topic ${topic}`, null);
    })
}

module.exports = subscriberRoutes