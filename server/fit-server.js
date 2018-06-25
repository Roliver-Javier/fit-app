var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();


app.get('/getAllPlans',function(req,resp){
    resp.status(200).send('hello world');
});

app.listen(3001);

