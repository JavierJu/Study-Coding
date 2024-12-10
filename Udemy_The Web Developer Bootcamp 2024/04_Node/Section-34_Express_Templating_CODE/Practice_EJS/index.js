const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, '/Public')));
// app.use(express.static('Public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = [
        "Luna",
        "Oliver",
        "Milo",
        "Leo",
        "Charlie",
        "Simba",
        "Max",
        "Bella",
        "Loki",
        "Nala"
    ];
    res.render('cats', { cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send(`There is no result if nothing search!`);
    }
    res.send(`This is a result for ${q}!`);
});

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
});


