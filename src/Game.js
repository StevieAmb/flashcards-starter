const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    // this.deck;
    this.turns;
    this.currentRound = {};
  }

  start() {
    const playingCards = prototypeQuestions.map(card => {
      let cards = new Card(card.id, card.question, card.answers, card.correctAnswer)
      return cards;
    });
    let deck = new Deck(playingCards);
    this.currentRound = new Round(deck);
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
