const Turn = require("./Turn");

class Round {
    constructor(deck) {
        console.log(deck);
        this.playingDeck = deck.cards;
        this.turn;
        this.turnsCount = 0;
        this.currentCard = deck.cards[0];

        this.incorrectGuesses = [];
        this.correctGuesses = [];
    }
}

module.exports = Round;