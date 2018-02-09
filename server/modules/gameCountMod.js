
class GuessChecker {
    constructor(guess1, guess2, guess3, guess4, truth){
        this.guess1 = guess1;
        this.guess2 =guess2;
        this.guess3 = guess3;
        this.guess4 = guess4;
        this.truth = truth;
    }

    checkGuess(){
        let guess1 = this.guess1;
        let guess2 = this.guess2;
        let guess3 = this.guess3;
        let guess4 = this.guess4;
        let truth = this.truth;
        let guessesArray = [guess1, guess2, guess3, guess4];
        let resultsArray = [];
        for(var i = 0; i < guessesArray.length; i++){
            //let truthArray = [];
            if(guessesArray[i] > truth){
                let result = 'guessed too high';
                resultsArray.push(result);
            } else if (guessesArray[i] < truth){
                let result = 'guessed too low';
                resultsArray.push(result);
            } else {
                let result = 'CORRECT!!!!';
                resultsArray.push(result);
            }
        }
        return resultsArray;
    }
}

module.exports = GuessChecker;