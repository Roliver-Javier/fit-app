var express = require('express'),
    router = express.Router(),
    plan = require('../models/Plan');

    router.get('/getAllPlans',function(req,res){
        plan.all(function(err, data){
            if(data){
                res.header('Content-Type', 'text/json');
                res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
                res.status(200)
                   .send(JSON.stringify(data));
                
            }
        });
    });

    router.get('/getPlan', function(req,res){
        plan.get(req.params.id,function(err,data){
            if(data){
                res.header('Content-Type', 'text/json');
                res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
                res.status(200)
                   .send(JSON.stringify(data)); 
            }
        });
    });

    module.exports = router;
