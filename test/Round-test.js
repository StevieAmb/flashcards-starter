const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Round', function() {

    it('should be a function', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);

        const round = new Round(deck);

        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        expect(round).to.be.an.instanceOf(Round);

    }); 

    it('should store a a deck of cards', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
    
        const round = new Round(deck);

        expect(round.playingDeck).to.deep.equal(deck.cards);
    })

    it('turns should start at a default of 0', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        expect(round.turnsCount).to.equal(0);
    });

    it('should have a method that increases turnsCount by 1 each turn', function() {
        const round = new Round();


    });

    it('should create a new instance of Turn')
    it('should change the next card in the list to the current card')
    it('should store a list of correct guesses')
    it('should store a list of incorrect guesses')

    //percentageCorrect
    //endRounds 

//in the test file, you make a mini round and mini deck of cards
//and then call take turns with guesses and scenaris you make up
//so that you can do a fake scenario to should what will happen
//when you have real and fake information.
//each test explores a different possibility. 
});