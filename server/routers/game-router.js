const express = require('express');
const router = express.Router();

//sets up connection between router and checkguess module
const Random = require('../modules/checkGuessMod');
const Check = require('../modules/gameCountMod');
const truthArray = [];

// post maximum range
router.post('/add',function(request,response){
    //gets input max number from DOM in object
    let maxInfo = request.body.number;
    let exampleRandomNumber = new Random(1, maxInfo.max)
    //console.log('Random Number: '+exampleRandomNumber.generateRandom());
    const randomNumber = exampleRandomNumber.generateRandom();
    console.log('Random Number: '+randomNumber);
    
    console.log(randomNumber);
    truthArray.push(randomNumber); // push one random number 
    
    response.sendStatus(200);
})

// post player guesses
router.post('/play',function(request,response){
    //gets input max number from DOM in object
    let guesses = request.body.guesses;
    let checkGuess = new Check (guesses.player1, guesses.player2, guesses.player3, guesses.player4, truthArray[0]);
    console.log(checkGuess.checkGuess());
    truthArray.push(checkGuess.checkGuess());
    //console.log( setupInfo.generateRandom(0, maxInfo.max));
    response.sendStatus(200);

});

router.get('/', function (req, res) {
    res.send(truthArray);

    console.log(truthArray);
})

module.exports = router;