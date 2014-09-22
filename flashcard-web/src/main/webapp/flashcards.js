/**
 * Created by jons on 21/09/14.
 */

var Flashcards = (function () {

    var getDeck = function () {
        return shuffleArray(cards)
    };

    /**
     * Randomize array element order in-place.
     * Using Fisher-Yates shuffle algorithm.
     */
    var shuffleArray = function (myArray) {
        for (var i = myArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;
        }
        return myArray;
    }

    var cards =
        [
            {q:"1 + 1 = ", a:"1 + 1 = 2"},
            {q:"1 + 2 = ", a:"1 + 2 = 3"},
            {q:"1 + 3 = ", a:"1 + 3 = 4"}
        ];

    return {
        getDeck: getDeck
    };

})();

