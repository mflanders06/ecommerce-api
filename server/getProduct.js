const products = require('../products.json');

console.log('I got here');

const getProduct =  (req, res, next) =>{
    const  { id } = req.params;
    const product = products.filter(( val ) => {
        val.id = id;
    })
    console.log(product);
    res.status(200).json(product)
} 

module.exports = getProduct;