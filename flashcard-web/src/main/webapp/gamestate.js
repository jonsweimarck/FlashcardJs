/**
 * Created by jons on 21/09/14.
 */

var Gamestate = (function () {

    var cards;
    var cardIndex;

    var init = function(cardsToUse){
        cards = cardsToUse;
        cardIndex = -1;
    }

    var hasMoreCards = function(){
        return cardIndex < cards.length - 1;
    }

    var nextCard = function(){
        cardIndex ++;
        return cards[cardIndex];
    }

    return {
        init: init,
        hasMoreCards: hasMoreCards,
        nextCard: nextCard
    };

})();

