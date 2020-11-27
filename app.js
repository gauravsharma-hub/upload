const express = require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const userRouter = require('./routes/userRoutes');

const app = express();

//// 1:- MIDDLWARE

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the server side......');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api', userRouter);

module.exports = app;
