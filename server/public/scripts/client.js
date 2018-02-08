$(document).ready(onReady)

function onReady(){
    console.log('Jacob is great!');
    $('#btn-max').on('click', function () {
    addNumber ();
    })

}

function addNumber () {
    let newMax = getRangeMax ();
    $.ajax ({
        type:'POST',
        url: '/game/add',
        data: {number: newMax}
    }).done(function(response){
        console.log('added');
        //we may need to perform other functions but not yet
        clearInputForm();
    }).fail(function (error){
        console.log(error);
    })
}


function getRangeMax () {
    let maxRange = $('#numberGuessMax').val(); 
    let rangeObject = {
        max: maxRange
    };
    return rangeObject;
}

function clearInputForm() {
    $('#numberGuessMax').val('');
}