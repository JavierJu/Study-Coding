const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    categories: [String],
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});


// const bike = new Product({ name: 'Air Pump', price: 10.50, categories: ['cycling'] })
// bike.save()
//     .then(data => {
//         console.log('IT WOKRED!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO ERROR');
//         console.log(err);
//     })

// Product.findOneAndUpdate({ name: 'Air Pump' }, { price: 15.50 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WOKRED!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('OH NO ERROR');
//         console.log(err);
//     })

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireDiscount = function () {
    return this.updateMany({}, { onSale: false, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'Air Pump' });
//     console.log(foundProduct);
//     await foundProduct.toggleOnSale();
//     console.log(foundProduct);
//     await foundProduct.addCategory('Pump');
//     console.log(foundProduct);
// }

// findProduct();

Product.fireDiscount().then(res => console.log(res));