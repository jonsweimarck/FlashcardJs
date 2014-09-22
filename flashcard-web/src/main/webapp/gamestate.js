/**
 * Created by jons on 21/09/14.
 */

var Gamestate = (function () {

    var cards;
    var cardIndex;
    var cardsOk = [];
    var cardsNok = [];

    var readyForNextCard;

    var init = function(cardsToUse, readyForNextCardCallback){
        cards = cardsToUse;
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
        alert('currentCardOk');
        cardsOk = cardsOk + cards[cardIndex];
        console.log('cardsOk added, length: ' + cardsOk.length);
        readyForNextCard();
    }

    var currentCardNok = function(){
        alert('currentCardNok');
        cardsNok = cardsNok + cards[cardIndex];
        console.log('cardsNok added, length: ' + cardsNok.length);
        readyForNextCard();
    }

    return {
        init: init,
        hasMoreCards: hasMoreCards,
        nextCard: nextCard,
        currentCardOk : currentCardOk,
        currentCardNok : currentCardNok
    };

})();

