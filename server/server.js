const express = require('express');
const app = express();
const port = 5050;

app.use(express.static('./server/public'));

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( {extended: true } ));

const gameRouter = require('./routers/game-router');
app.use('/game', gameRouter);

app.listen(port, function(){
    console.log(`Listing on port: ${port}`);
    
})