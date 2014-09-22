var Gamearea = (function () {

    var init = function(cardOkFunc, cardNokFunc, startAgainFunc){
        $("#showcardok_butt").click(cardOkFunc);
        $("#showcardnok_butt").click(cardNokFunc);
        $("#finished_butt").click(startAgainFunc);
    }

    var showCard = function(card){
        $("#missedcard_div").hide();
        $("#finished_div").hide();
        $("#showcard_div").show();
        $("#showcardq").text(card.q);
    }

    var showMissedCards = function(cards, okCallback){
        $("#showcard_div").hide();
        $("#finished_div").hide();
        $("#missedcard_div").show();
        var missedText = "Du hade bara fel på " + cards.length + " kort: ";
        for (var i = 0; i < cards.length; i++) {
            missedText += cards[i].q + " ";
        }
        $("#missedcard_text").text(missedText);
        $("#missedcard_butt").click(okCallback);
    }

    var showFinished = function(cardsToshow){
        $("#showcard_div").hide();
        $("#missedcard_div").hide();
        $("#finished_div").show();

        var missedText = "Sluuuut! Du hade bara fel på " + cardsToshow.length + " kort: ";
        for (var i = 0; i < cardsToshow.length; i++) {
            missedText += cardsToshow[i].q + " ";
        }
        $("#finished_text").text(missedText);


    }

    return {
        init: init,
        showCard: showCard,
        showMissedCards: showMissedCards,
        showFinished: showFinished


    };

})();

