const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan')

const app = express();
app.use(express.json());


app.use(cors({
    credential:true
}));
app.use(cookieParser());
app.use(morgan('dev'))

module.exports = app;