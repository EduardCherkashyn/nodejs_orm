const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const dbConnection = require('../db');
const { errorHandler } = require('./middlewares');
const { product } = require('../../models');

const app = express();

app.use(
  basicAuth({
    users: { Masters: 'Academy' },
  }),
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(errorHandler);

async function getProduct() {
  const res = await product.findAll({
    where: { item: 'test' },
    raw: true,
    nest: true,
  });
  console.log(res);
}

getProduct();

async function createProduct() {
  const res = await product.create(
    {
      item: 'test',
      type: 'orange',
      measure: 'quantity',
      measureValue: '20',
      priceType: 'pricePerKilo',
      pricevalue: '$1000',
    },
    {
      returning: true,
    },
  );
  console.log(res);
}

// createProduct();

module.exports = app;
