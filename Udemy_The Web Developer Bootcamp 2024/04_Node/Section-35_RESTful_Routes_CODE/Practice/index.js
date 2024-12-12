const express = require('express');
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof woof!!!'
    }
]

//Show all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

//Show new comment form
app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments });
})

//Show create a new comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send('it worked!');
    res.redirect('/comments');
})

//Show one comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

//Edit comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

//Update comment
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newComment = req.body.comment;
    foundComment.comment = newComment;
    res.redirect('/comments');
})

//Delete comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})




//Show Home
app.get('/', (req, res) => {
    res.render('home');
})

//Get request example
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
    // res.render('tacos');
})

//Post request example
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    // res.send('POST /tacos response');
    res.send(`Ok, your order is ${meat} ${qty}.`);
    // res.render('tacos');
})
