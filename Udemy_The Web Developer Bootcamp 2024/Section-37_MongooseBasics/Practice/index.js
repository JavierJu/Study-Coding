const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log('OH NO ERROR!');
        console.log(err);
    })

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));