var Deckstate = (function () {

    var cards;
    var cardIndex;
    var missedCardsFirstRound =[];   // Bra ha för visa inför felomgång och vid slut
    var currentCardHandledCallback;  // Håller func som anropas efter hantering av ok/nok-knapptryck
    var isFirstRound;

    var STATE_CARD_NOT_YET_SHOWN = 0;
    var STATE_CARD_OK_FIRST_ROUND = 1;
    var STATE_CARD_OK_OTHER_ROUND = 2;
    var STATE_CARD_MISSED = 3;

    /**
     *
     * @param cardsToUse Den kortlek som kommer att användas
     * @param currentCardHandledCB Callback som alltid kommer att anropas efter att ett kort hanterats
     * av currentCardOk() eller currentCardNok()
     */
    var initFirstRound = function(cardsToUse, currentCardHandledCB){
        console.log("Deckstate initFirstRound med " + cardsToUse.length + " kort");
        cards = addInitStateToCards(cardsToUse);
        cardIndex = -1;
        missedCardsFirstRound =[];
        currentCardHandledCallback = currentCardHandledCB;
        isFirstRound = true;

        function addInitStateToCards(cards) {
            for (var i = 0; i < cards.length; i++){
                cards[i].state = STATE_CARD_NOT_YET_SHOWN;
            }
            return cards;
        }
    };

    /**
     * Initierar variabler för en omgång med de kort som det svarats fel på
     */
    var initOtherRound = function(){
        console.log("Deckstate initOtherRound ");
        cardIndex = -1;
        isFirstRound = false;
    };


    var nbrCardsOkFirstRound = function(){return nbrWithState(STATE_CARD_OK_FIRST_ROUND);};

    var nbrCardsOkOtherRounds = function(){return nbrWithState(STATE_CARD_OK_OTHER_ROUND);};

    var nbrCardsMissed = function(){return nbrWithState(STATE_CARD_MISSED);};

    var nbrCardsleft =  function(){return nbrWithState(STATE_CARD_NOT_YET_SHOWN);};

    function nbrWithState(stateToCount){
        var count = 0;
        for (var i = 0; i < cards.length; i++) {
            if(cards[i].state === stateToCount){
                count ++;
            }
        }
        return count;
    }

    var hasMoreCards = function(){
        for (var i = cardIndex + 1; i < cards.length; i++) {
            if(cards[i].state === STATE_CARD_MISSED || cards[i].state === STATE_CARD_NOT_YET_SHOWN){
                return true;
            }
        }
        return false;
    };

    var nextCard = function(){
        console.log('nextCard');
        for (cardIndex ++; cardIndex < cards.length; cardIndex++) {
            if(cards[cardIndex].state === STATE_CARD_MISSED || cards[cardIndex].state === STATE_CARD_NOT_YET_SHOWN){
                return cards[cardIndex];
            }
        }
        return null;
    };

    /**
     * Markerar aktuellt kort som ok och anropar sedan callbackfunktionen angetts i initFirstround()
     */
    var currentCardOk = function(){
        console.log('currentCardOk');
        if(isFirstRound){
            cards[cardIndex].state = STATE_CARD_OK_FIRST_ROUND;
        } else {
            cards[cardIndex].state = STATE_CARD_OK_OTHER_ROUND;
        }

        currentCardHandledCallback();
    };

    /**
     * Markerar aktuellt kort som Nok och anropar sedan callbackfunktionen angetts i initFirstround()
     */
    var currentCardNok = function(){
        console.log('currentCardNok');
        cards[cardIndex].state = STATE_CARD_MISSED;
        if(isFirstRound){
            missedCardsFirstRound.push(cards[cardIndex]);
            console.log('cardsNok added, length: ' + missedCardsFirstRound.length);
        }
        currentCardHandledCallback();
    };

    var missedCardsExists = function(){
        return nbrCardsMissed() > 0;
    };

    var getMissedCardFirstRound = function(){
        return missedCardsFirstRound;
    };

    return {
        initFirstRound: initFirstRound,
        initOtherRound: initOtherRound,
        hasMoreCards: hasMoreCards,
        nextCard: nextCard,
        currentCardOk : currentCardOk,
        currentCardNok : currentCardNok,
        missedCardsExists : missedCardsExists,
        getMissedCardFirstRound : getMissedCardFirstRound,
        nbrCardsOkFirstRound : nbrCardsOkFirstRound,
        nbrCardsOkOtherRounds :nbrCardsOkOtherRounds,
        nbrCardsMissed :nbrCardsMissed,
        nbrCardsleft : nbrCardsleft
    };

})();

