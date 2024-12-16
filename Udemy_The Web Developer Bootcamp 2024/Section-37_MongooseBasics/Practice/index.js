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

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// // const amadeus = new Movie({
// //     title: 'Amadeus',
// //     year: 1986,
// //     score: 9.2,
// //     rating: 'R'
// // });

// Movie.insertMany([
//     { title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' },
//     { title: 'Inception', year: 2010, score: 8.8, rating: 'PG-13' },
//     { title: 'The Godfather', year: 1972, score: 9.2, rating: 'R' },
//     { title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'PG-13' },
//     { title: 'Schindler’s List', year: 1993, score: 8.9, rating: 'R' },
//     { title: 'Pulp Fiction', year: 1994, score: 8.9, rating: 'R' },
//     { title: 'The Shawshank Redemption', year: 1994, score: 9.3, rating: 'R' },
//     { title: 'Forrest Gump', year: 1994, score: 8.8, rating: 'PG-13' },
//     { title: 'The Matrix', year: 1999, score: 8.7, rating: 'R' },
//     { title: 'Interstellar', year: 2014, score: 8.6, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log('IT WORKED!')
//         console.log(data)
//     })
