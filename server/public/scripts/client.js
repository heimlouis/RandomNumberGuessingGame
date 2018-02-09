$(document).ready(onReady)

function onReady() {
    setupGame();
    $('#startGame').on('click', function(){
        // hide the html from setupMode
        // run gamePlayMode
        $('.setupMode').hide();
        $('.playMode').show();
        playGame();
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

}

