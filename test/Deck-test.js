const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();

        expect(Deck).to.be.a('function');
    });

    it('should be  an instance of Deck', function() {
        const deck = new Deck();

        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should store a collection of playable card objects', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]];
;
        const deck = new Deck(playCards);

        expect(deck.cards).to.equal(playCards);
    });

    it('should be able to return number of cards in the deck', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]];

        const deck = new Deck(playCards);

        expect(deck.countCards()).to.equal(3);
    })
});