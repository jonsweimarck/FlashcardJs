var Gamearea = (function () {

    var init = function(cardOkCallback, cardNokCallback){
        $("#showcardok_butt").click(cardOkCallback);
        $("#showcardnok_butt").click(cardNokCallback);
    }

    var showCard = function(card){
        $("#missedcard_div").hide();
        $("#showcard_div").show();
        $("#showcardq").text(card.q);
    }

    var showMissedCards = function(cards, okCallback){
        $("#showcard_div").hide();
        $("#missedcard_div").show();
        var missedText = "Du hade bara fel på " + cards.length + " kort: ";
        for (var i = 0; i < cards.length; i++) {
            missedText += cards[i].q + " ";
        }
        $("#missedcard_text").text(missedText);

        $("#missedcard_butt").click(okCallback);
    }

    return {
        init: init,
        showCard: showCard,
        showMissedCards: showMissedCards
    };

})();

