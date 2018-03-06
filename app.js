var express = require('express');
var app = express();
const basicAuth = require('express-basic-auth');
const bodyParser    = require('body-parser');
const qt = 2;


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

app.get('/getStockUnit', function (req, res) {
    console.log('GET getStockUnit request sku: ' + req.query.sku);
    var respond = {
        id: Math.floor(Math.random() * Math.floor(100)),
        sku : req.query.sku,
        quantity : qt
    }
    res.send(respond);
    console.log('GET external-inventory respond: ' + JSON.stringify(respond));
});

app.get('/getStockUnits', function (req, res) {
    console.log('GET getStockUnits request id: ' + req.query.id);
    var respond = {
        id : req.query.id,
        stockUnits : null
    }
    switch (req.query.id) {
        case "5a96dad55dc69532587d3956":
            var data = [
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "12",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "13",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "14",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "15",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "16",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "17",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "18",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "19",
                    quantity : qt
                }
            ];
            respond.stockUnits = data;
            break;
        case "5a9418558f48c02178bbb6qt":
            var data = [
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "123abc",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "a1b2c3",
                    quantity : qt
                }
            ];
            respond.stockUnits = data;
            break;
        case "5a9d5ef05dc69544980be831":
            var data = [
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "qazwsx",
                    quantity : qt
                },
                {
                    id: Math.floor(Math.random() * Math.floor(100)),
                    sku : "wsxqaz",
                    quantity : qt
                }
            ];
            respond.stockUnits = data;
            break;
        default:
            break;
    }
    res.send(respond);
    console.log('GET external-inventory respond: ' + JSON.stringify(respond));
});

app.listen(80, function () {
    console.log('Example app listening on port 80! with jenkins');
});