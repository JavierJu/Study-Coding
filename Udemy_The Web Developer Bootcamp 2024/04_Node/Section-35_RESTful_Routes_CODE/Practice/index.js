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

app.get('/', (req, res) => {
    // res.render('');
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
