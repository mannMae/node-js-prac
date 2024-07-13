const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

module.exports.app = app;
