const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const parseService = require('./services/parse')();
const parseController = require('./controllers/parse')(parseService);
app.use('/parse', parseController);
app.listen(3000, () => console.log('Running: http://localhost:%d',3000));
