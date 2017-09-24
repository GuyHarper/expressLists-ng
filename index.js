const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { port, dbURI } = require('./config/environment');

const app = express();

mongoose.connect(dbURI, { useMongoClient: true });

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
