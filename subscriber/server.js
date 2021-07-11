const express = require('express');
require('dotenv').config();
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Accept, X-Requested-With, Authorization, Content-Type, x-custom-header');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    next();
});

const PORT = process.env.SUBSCRIBER_PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

module.exports = app;