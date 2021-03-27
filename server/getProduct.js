const products = require('../products.json');

const getProduct =  (req, res) =>{
    const  { id } = req.params; //API passed in parameter (as string)
    const idNum = parseInt(id); //parameter cast as number
    const product = products.filter(( value ) => value.id === idNum);
    
    if (product.length > 0){
        res.status(200).json(product);
    }
    else {res.status(500).json('Item not in the list')

    }
} 

module.exports = getProduct;