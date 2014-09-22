var Gamearea = (function () {

    var init = function(cardOkCallback, cardNokCallback){
        $("#cardok_butt").click(cardOkCallback);
        $("#cardnok_butt").click(cardNokCallback);
    }

    var showCard = function(card){
        $("#cardq").text(card.q);
    }

    return {
        init: init,
        showCard: showCard
    };

})();

