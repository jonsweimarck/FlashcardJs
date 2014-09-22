var Gamearea = (function () {

    var init = function(cardOkCallback, cardNokCallback){
        $("#cardok_butt").click(cardOkCallback);
        $("#cardnok_butt").click(cardNokCallback);
    }

    var showCard = function(card){
        $("#cardq").text(card.q);
    }

    var showMissedCards = function(cards){
        var missedText = "Du hade bara fel på " + cards.length + " kort: ";
        for (var i = 0; i < cards.length; i++) {
            missedText += cards[i].q + " ";
        }
        $("#status").text(missedText);
    }

    return {
        init: init,
        showCard: showCard,
        showMissedCards: showMissedCards
    };

})();

