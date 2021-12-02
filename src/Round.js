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
        this.turn = new Turn(guess, this.currentCard)
        let playingCard = this.playingDeck;
        this.currentCard = playingCard[this.turnsCount];
        this.turnsCount++;
        return this.currentCard
    }
}

module.exports = Round;