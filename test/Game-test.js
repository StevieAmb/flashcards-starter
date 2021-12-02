const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const data = require('../src/data');
const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
        let game = new Game();

        expect(Game).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        expect(round).to.be.an.instanceOf(Round);

    });

});