const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

//console.log(products);

app.listen(port, () => console.log(`Listening on Port ${port}`));

