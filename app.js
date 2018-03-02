var express = require('express');
var app = express();
const basicAuth = require('express-basic-auth');
const bodyParser    = require('body-parser');


app.use(bodyParser.json());

app.use(basicAuth({
    users: { 'jose': 'rube' }
}));

app.post('/notifyOrder', function (req, res) {
    console.log(req.body);
    res.send('funcionando ando!');
    console.log("llego el post");
});

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log("llego el get");
});

app.listen(80, function () {
    console.log('Example app listening on port 80! with jenkins');
});