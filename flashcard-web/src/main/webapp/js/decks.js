/**
 * Created by jons on 21/09/14.
 */

var Decks = (function () {

    var getDeck = function (deckNumber) {
        alert('Letar efterr decknumber' + deckNumber);
        for (var i = 0; i < allDecks.length; i++) {
            if(deckNumber == allDecks[i].id){
                alert('Hittade decknumber' + deckNumber);
                return shuffleArray(allDecks[i].cards);
            }
        }
        alert('Hittade INTE decknumber' + deckNumber);

    };

    var getAllDecks = function(){
        return allDecks;
    }

    /**
     * Randomize array element order in-place.
     * Using Fisher-Yates shuffle algorithm.
     */
    function shuffleArray(myArray) {
        for (var i = myArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;
        }
        return myArray;
    }

    var cards1 =
        [
            {q:"1 + 1 = ", a:"1 + 1 = 2"},
            {q:"1 + 2 = ", a:"1 + 2 = 3"},
            {q:"1 + 3 = ", a:"1 + 3 = 4"}
        ];

    var deck1 =
        {
            id : 1,
            desc: 'Kortlek nummer 1',
            cards : cards1
        };

    var allDecks = [deck1];



    return {
        getDeck: getDeck,
        getAllDecks: getAllDecks
    };

})();

