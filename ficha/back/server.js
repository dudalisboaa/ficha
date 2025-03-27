const express = require('express');
const cors = require('cors');
const connection = require('../back/dbconfig');
const app = express();

app.use(cors());
app.use(express.json());

const port = 8339;

