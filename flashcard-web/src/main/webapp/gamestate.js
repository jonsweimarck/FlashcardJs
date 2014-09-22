/**
 * Created by jons on 21/09/14.
 */

var Gamestate = (function () {

    var cards;
    var cardIndex;
    var missedCards =[];

    var readyForNextCard;

    var init = function(cardsToUse, readyForNextCardCallback){
        console.log("Gamestate init med " + cardsToUse.length + " kort");
        cards = cardsToUse;
        missedCards =[]; // Viktigt eftersom init anropas även för att köra igång missedCardRound
        cardIndex = -1;
        readyForNextCard = readyForNextCardCallback;
    }

    var hasMoreCards = function(){
        return cardIndex < cards.length - 1;
    }

    var nextCard = function(){
        cardIndex ++;
        return cards[cardIndex];
    }

    var currentCardOk = function(){
        console.log('currentCardOk');
        readyForNextCard();
    }

    var currentCardNok = function(){
        console.log('currentCardNok');
        missedCards.push(cards[cardIndex]);
        console.log('cardsNok added, length: ' + missedCards.length);
        readyForNextCard();
    }

    var missedCardsExists = function(){
        return missedCards.length > 0;
    }

    var getMissedCard = function(){
        return missedCards;
    }

    return {
        init: init,
        hasMoreCards: hasMoreCards,
        nextCard: nextCard,
        currentCardOk : currentCardOk,
        currentCardNok : currentCardNok,
        missedCardsExists : missedCardsExists,
        getMissedCard : getMissedCard
    };

})();

