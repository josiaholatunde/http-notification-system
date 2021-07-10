const { subscribeToTopic, createTopic } = require('../../controllers/TopicController')
const topicValidators = require('../../validators/topicValidators')

const topicRoutes = app => {


    app.post('/topic', topicValidators.createTopic(), createTopic);
    app.post('/publish/:topic', topicValidators.subscribeToTopic(), subscribeToTopic);

}


module.exports = topicRoutes