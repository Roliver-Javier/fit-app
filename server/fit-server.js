var express = require('express'),
    bodyParser = require('body-parser'),
    plan= require('./models/Plan.js'),
    app = express();

//app.use(bodyParser);

app.get('/getAllPlans',function(req,resp){
    resp.header('Content-Type', 'text/json');
    resp.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    resp.status(200).send(JSON.stringify(plan));
    console.log('hola');
});

app.listen(3001);

