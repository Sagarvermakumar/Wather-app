const express = require('express');
const path = require('path');
var hbs = require('hbs');


const app = express();
const port = 4000;


const staticPath = path.join(__dirname, "../public");
// const partialsPath = path.join(__dirname, "../templates/partials");
const partials_path = path.join(__dirname, "../templates/partials")
const template_path = path.join(__dirname, "../templates/views");

// console.log(partials_path)

app.set('view engine', 'hbs')
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.render('index')
})
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})
app.listen(port, () => {
    console.log(`server is runing on port:${port}`)
})


