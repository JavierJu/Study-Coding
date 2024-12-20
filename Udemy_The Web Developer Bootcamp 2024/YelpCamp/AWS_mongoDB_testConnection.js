const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
// mongoose.connect('mongodb://admin:javierju12@13.208.254.200:27017/farmStand?authSource=admin')
mongoose.connect('mongodb://admin:javierju12@13.208.254.200:27017/admin')
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log('OH NO MONGO CONNECTION ERROR!');
        console.log(err);
    });
