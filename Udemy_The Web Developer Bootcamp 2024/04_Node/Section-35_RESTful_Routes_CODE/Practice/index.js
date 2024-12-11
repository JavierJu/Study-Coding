const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

// Our fake database:
let comments = [
    {
        // id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        // id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        // id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        // id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments });
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    // res.send('it worked!');
    res.redirect('/comments');
})






app.get('/', (req, res) => {
    res.render('home');
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
    // res.render('tacos');
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    // res.send('POST /tacos response');
    res.send(`Ok, your order is ${meat} ${qty}.`);
    // res.render('tacos');
})
