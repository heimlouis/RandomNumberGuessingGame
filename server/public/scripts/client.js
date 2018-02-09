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
        let player1 = $('#playerOneGuess').val();
        let player2 = $('#playerTwoGuess').val();
        let player3 = $('#playerThreeGuess').val();
        let player4 = $('#playerFourGuess').val();
    }
    return {
        guess1: player1,
        guess2: player2,
        guess3: player3,
        guess4: player4
    };
}

