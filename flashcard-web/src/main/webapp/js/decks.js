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

    var getAddDecks = function(){
        return [deck1, deck2];
    }

    var getSubDecks = function(){
        return [deck2, deck1];
    }

    var getMultiDecks = function(){
        return [deck1];
    }

    var getHomeworkDecks = function(){
        return [deck1, deck2];
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
            id      : 1,
            name    : 'Kortleksnamn 1',
            desc    : 'Kortlek nummer 1',
            cards   : [
                        {q:"1 + 1 = ", a:"1 + 1 = 2"},
                        {q:"1 + 2 = ", a:"1 + 2 = 3"},
                        {q:"1 + 3 = ", a:"1 + 3 = 4"}
                       ]
        };

    var deck2 =
    {
        id      : 1,
        name    : 'Kortleksnamn 2',
        desc    : 'Kortlek nummer 2',
        cards   : [
            {q:"1 - 1 = ", a:"1 - 1 = 0"},
            {q:"2 - 2 = ", a:"1 - 2 = 0"},
            {q:"3 - 3 = ", a:"1 - 3 = 0"}
        ]
    };






    return {
        getDeck         : getDeck,
        getAddDecks     : getAddDecks,
        getSubDecks     : getSubDecks,
        getMultiDecks   : getMultiDecks,
        getHomeworkDecks: getHomeworkDecks
    };

})();

