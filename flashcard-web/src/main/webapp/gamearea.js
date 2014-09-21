var Gamearea = (function () {

    var showCard = function(card, cardOkCallback, cardNokCallback){
        $("#cardq").val(card.q);
        $("#cardok_butt").onclick = cardOkCallback;
        $("#cardok_butt").onclick = cardNokCallback;
    }

    return {
        showCard: showCard
    };

})();

