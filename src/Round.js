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
            return this.turn.giveFeedback();
        }
        return this.currentCard;
    }
}

module.exports = Round;

//Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
//Feedback is returned regarding whether the guess is incorrect or correct