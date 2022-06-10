require('@babel/register');

const express = require('express');

const path = require('path');
const Router = require('./routers/index');
const logger = require('morgan');
const PORT = 3000
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', Router);
app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

