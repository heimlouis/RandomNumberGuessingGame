$(document).ready(onReady)

function onReady() {
    setupGame();
    $('.playMode').hide();
    $('#startGame').on('click', function(){
        // hide the html from setupMode
        // run gamePlayMode
        $('.setupMode').hide();
        $('.playMode').show();
        playGame();
    });
    $('#cancelGame').on('click', function(){
       // hide the game mode when cancel is clicked
       $('.setupMode').show();
       $('.playMode').hide();
       setupGame();
    });
    $('.guessSubmission').on('click', function(){
        // pull in all guesses

        playGame();
        guessCheck ();
     });

} // end onReady

// setupMode() handles all the client side JS 
function setupGame() {
    // when we click #btn-max, call addNumber
    $('#btn-max').on('click', function () {
        addNumber();
    });

    // 
    function addNumber() {
        // store an object with the maximum value possible for the random number in the variable newMax
        let newMax = getRangeMax();
        // use ajax to send newMax 
        $.ajax({
            type: 'POST',
            url: '/game/add',
            data: { number: newMax }
        }).done(function (response) {
            console.log('added');
            //we may need to perform other functions but not yet
            clearInputForm();
        }).fail(function (error) {
            console.log(error);
        })
    }


    function getRangeMax() {
        let maxRange = $('#numberGuessMax').val();
        let rangeObject = {
            max: maxRange
        };
        return rangeObject;
    }

    function clearInputForm() {
        $('#numberGuessMax').val('');
    }
} // end setupMode


function playGame(){
    function getPlayerGuess (){
        let guess1 = $('#playerOneGuess').val();
        let guess2 = $('#playerTwoGuess').val();
        let guess3 = $('#playerThreeGuess').val();
        let guess4 = $('#playerFourGuess').val();
        return {
            player1: guess1,
            player2: guess2,
            player3: guess3,
            player4: guess4
        } 
    } // end getPlayerGuess
    $.ajax({
        type: 'POST',
        url: '/game/play',
        data: { guesses: getPlayerGuess () }
    }).done(function (response) {
        console.log('added');
        //we may need to perform other functions but not yet
    }).fail(function (error) {
        console.log(error);
    })

}

function guessCheck () {
    $.ajax({
        type: 'GET',
        url:'/game',
    }).done (function (response) {
        $('.playMode').append(
            `<p>${response}</p>`
        ).fail(function (response) {
            console.log(response);
        })
    });
}
