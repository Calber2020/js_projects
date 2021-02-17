const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})


app.get('/rand'), (req, res) => {
    res.render('random')
}

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})