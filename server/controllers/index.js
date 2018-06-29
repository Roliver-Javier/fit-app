var express = require('express'),
    router = express.Router();

    router.use('/plans',require('./PlanController'));
    
    module.exports = router;