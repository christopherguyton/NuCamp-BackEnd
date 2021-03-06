const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);


// app.get('/campsites/:campsiteId', (req, res) =>{
//     res.end(`Will send the details of the campsite: ${req.params.campsiteId} to you`);
// });

// app.post('/campsites/:campsiteId', (req, res) =>{
//     res.end(`POST operation not supported on ${req.params.campsiteId}`)
// });

// app.put('/campsites/:campsiteId', (req, res) =>{
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//     with description ${req.body.description}`);
// });

// app.delete('/campsites/:campsiteId', (req, res) =>{
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });





app.use(express.static(__dirname + '/public'));

app.use((req, res) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>')
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}`)
});