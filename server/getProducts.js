const products = require('../products.json');

const getProducts =  (req, res, next) =>{
    if (req.query.price){
        const pricedProducts = products.filter(( value ) =>  value.price >= parseInt(req.query.price));
        if (pricedProducts.length > 0){
            res.status(200).json(pricedProducts);
        }
        else {
            res.status(500).json('No products priced that high');
        }
    }
    else {
        res.status(200).json(products)
    }
} 

module.exports = getProducts;