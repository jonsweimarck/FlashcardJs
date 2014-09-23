/**
 * Created by jons on 21/09/14.
 */

var Gamestate = (function () {

    var cards;
    var cardIndex;
    var missedCards =[];
    var readyForNextCard;

    var STATE_CARD_NOT_YET_SHOWN = 0;
    var STATE_CARD_OK_FIRST_ROUND = 1;
    var STATE_CARD_OK_OTHER_ROUND = 2;
    var STATE_CARD_MISSED = 3;

    var init = function(cardsToUse, readyForNextCardCallback){
        console.log("Gamestate init med " + cardsToUse.length + " kort");
        cards = addInitStateToCards(cardsToUse);
        cardIndex = -1;
        missedCards =[]; // Viktigt eftersom init anropas även för att köra igång missedCardRound
        readyForNextCard = readyForNextCardCallback;
    }

    function addInitStateToCards(cards) {
        for (var i = 0; i < cards.length; i++){
            cards[i].state = STATE_CARD_NOT_YET_SHOWN;
        }
    }

    var hasMoreCards = function(){
        return cardIndex < cards.length - 1;
    }

    var nextCard = function(){
        console.log('nextCard');
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

