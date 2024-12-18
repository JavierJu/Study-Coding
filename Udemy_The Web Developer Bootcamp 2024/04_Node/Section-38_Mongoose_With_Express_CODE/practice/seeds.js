const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!');
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    { name: 'Apple', price: 1.5, category: 'fruit' },
    { name: 'Banana', price: 0.8, category: 'fruit' },
    { name: 'Carrot', price: 0.6, category: 'vegetable' },
    { name: 'Broccoli', price: 1.2, category: 'vegetable' },
    { name: 'Milk', price: 2.5, category: 'diary' },
    { name: 'Cheese', price: 3.0, category: 'diary' },
    { name: 'Orange', price: 1.3, category: 'fruit' },
    { name: 'Spinach', price: 1.1, category: 'vegetable' },
    { name: 'Yogurt', price: 2.0, category: 'diary' },
    { name: 'Strawberry', price: 2.8, category: 'fruit' }
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })