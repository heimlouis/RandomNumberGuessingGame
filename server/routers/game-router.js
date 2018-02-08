const express = require('express');
const router = express.Router();

const setupInfo = require('../modules/checkGuessMod');
router.get('/', function(request, response){
    //this is the max number from the DOM
    let setupInput = setupInfo;//we're assuming its sent as one variable for now, subject to change
    response.send(setupInput);
    
})

module.exports = router;