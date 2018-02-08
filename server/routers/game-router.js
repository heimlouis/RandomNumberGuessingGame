const express = require('express');
const router = express.Router();

//sets up connection between router and checkguess module
const setupInfo = require('../modules/checkGuessMod');
//getting info from ajax function
// router.get('/', function(request, response){
//     //this is the max number from the DOM
//     let setupInput = setupInfos;//i don't think this is going to work...
//     response.send(setupInput);
    
// })

router.post('/add',function(request,response){
    //gets input max number from DOM in object
    let maxInfo = request.body.number;
    console.log(maxInfo);
    response.sendStatus(200);

})

module.exports = router;