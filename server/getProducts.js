const products = require('../products.json');

const getProducts =  (req, res, next) =>{
    res.status(200).json(products)
} 

module.exports = getProducts;