const express = require('express')
const bodyParser = require('body-parser');
const {
    json
} = require('body-parser');

const camspiteRouter = express.Router();

camspiteRouter.use(bodyParser, json());

camspiteRouter.route('/').all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res) => {
    res.end('Will send all the campsites to you');
}).post((req, res) => {
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}`)
}).put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites')
}).delete((req, res) => {
    res.end('Deleting all campstes');
});

module.exports = camspiteRouter;