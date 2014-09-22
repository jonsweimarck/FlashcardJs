/**
 * Created by jons on 21/09/14.
 */
var GameController= (function () {

    var startGame = function(){
        Gamestate.init(Flashcards.getCards(), whenReadyForNextCard);
        Gamearea.init(Gamestate.currentCardOk, Gamestate.currentCardNok);
        showNextCard();
    }

    function showNextCard(){
        var card = Gamestate.nextCard();
        Gamearea.showCard(card);
    }

    function whenReadyForNextCard(){
        alert("whenReadyForNextCard");
        if(Gamestate.hasMoreCards()){
            showNextCard();
        }
    }

    return {
        startGame: startGame
    };

})();