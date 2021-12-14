const { application } = require("express");
var express = require("express");
var app = express();
var port = 3000;
var exphb = require("express-handlebars");
var path = require('path');
var favicon = require('serve-favicon');
var bp = require('body-parser')


app.engine("handlebars", exphb.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("image"));
app.use(favicon(path.join(__dirname, 'image', 'pipoca.png')));
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))

//Variavel de Front
var usuario = {"nome":"","email":"","senha":""}

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/cadastro', (req, res) => {
    res.render("cadastro");
});

app.get('/perfil', (req, res) => {
    res.render("perfil");
});

app.post('/cadastro', (req, res) => {
    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    console.log(usuario)
    res.render('perfil', {usuario});
});
app.listen(port, () => console.log(`App sendo lido na porta ${port}!`));