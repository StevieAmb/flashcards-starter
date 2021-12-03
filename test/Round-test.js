const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
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

    it('should return the current card being played', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);
        
        round.returnCurrentCard();

        expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    });

    it('should have a method that increases turnsCount by 1 each turn', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        round.takeTurn('guess');
        round.takeTurn('guess');

        expect(round.turnsCount).to.equal(2)
    });

    it('should change the next card in the list to the current card being played', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        round.takeTurn('guess');

        expect(round.currentCard).to.equal(data.prototypeData[1]);

    });

    it('should store a list of incorrect guess ids', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        round.takeTurn('guess');

        expect(round.incorrectGuesses.length).to.equal(1);

    });

    it('should give feedback if answer is incorrect', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]
    
        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        let incorrectAnswer = round.takeTurn('guess');
        console.log('incorrect', incorrectAnswer);
        expect(incorrectAnswer).to.equal('Incorrect!')
    })

    it('should give feedback if answer is correct', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]

        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        let correctAnswer = round.takeTurn('array');
        console.log(correctAnswer);

        expect(correctAnswer).to.equal('Correct!');
    })

    it('should return a percentage of guesses that were correct', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]

        const deck = new Deck(playCards);
        
        const round = new Round(deck);

        round.takeTurn('array');
        round.takeTurn('potato');

        let percentCorrect = round.calculatePercentCorrect();
        
        expect(percentCorrect).to.equal(50);

    })

    it('should tell the user that the round is over and their percentage of correct guesses', function() {
        let playCards = [data.prototypeData[0], data.prototypeData[1], data.prototypeData[2]]

        const deck = new Deck(playCards);
        
        const round = new Round(deck);
        
        round.takeTurn('array');
        round.takeTurn('potato');
        let roundOver = round.endRound();

        expect(roundOver).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
    });



    //percentageCorrect
    //endRounds 

//in the test file, you make a mini round and mini deck of cards
//and then call take turns with guesses and scenaris you make up
//so that you can do a fake scenario to should what will happen
//when you have real and fake information.
//each test explores a different possibility. 
});