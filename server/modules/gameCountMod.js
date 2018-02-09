
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
        for(let i = 0; i < guessesArray.length; i++){
            //let truthArray = [];
            if(guessesArray[i] > truth){
                resultsArray.push(guessesArray[i] + ' was too high');
            } else if (guessesArray[i] < truth){
                resultsArray.push(guessesArray[i] + ' was too low');
            } else {
                resultsArray.push(guessesArray[i] + ' was right!  YOU WIN!')
            }
        }
        return resultsArray;
    }
}

module.exports = GuessChecker;