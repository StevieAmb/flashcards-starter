const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.playingDeck = deck.cards;
        this.turn;
        this.turnsCount = 0;
        this.currentCard = deck.cards[0];

        this.incorrectGuesses = [];
        this.correctGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
    
        let currentPlayingCard = this.playingDeck;
        this.turnsCount++;
        this.currentCard = currentPlayingCard[this.turnsCount];

        this.turn = new Turn(guess, this.currentCard)
        
        let answer = this.turn.evaluateGuess()
        if(!answer) {
            this.incorrectGuesses.push(this.currentCard.id);
        } else {
            this.correctGuesses.push(this.currentCard.id);
        }
        
        return this.turn.giveFeedback(answer);
    }

    calculatePercentCorrect() {
       return Math.floor(this.correctGuesses.length / this.turnsCount * 100);
    }

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }

module.exports = Round;

//Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
//Feedback is returned regarding whether the guess is incorrect or correct