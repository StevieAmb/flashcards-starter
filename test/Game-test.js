const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const data = require('../src/data');
const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {

        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        let game = new Game();
        game.start();
        expect(game).to.be.an.instanceOf(Game);

    });

    it('should instantiate a new round as the Current Round', function() {
        let game = new Game();
        
        game.start();

        expect(game.currentRound).to.be.an.instanceOf(Round);
    })

    it('should instantiate new cards when starting')
    it('should create new instances of Deck at starting')
    it('should create new instance of Round at starting')

});

