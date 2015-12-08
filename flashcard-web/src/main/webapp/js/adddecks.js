var AddDecks = (function () {

    var getAddDecks = function(){
        return [deck1, deck2];
    };


    var deck1 =
        {
            id      : 1,
            name    : 'Lilla plus',
            desc    : 'Kortlek nummer 1',
            cards   : [
                {q:'0 + 0 = ', a:'0 + 0 = 0'},
                {q:'0 + 1 = ', a:'0 + 1 = 1'},
                {q:'0 + 2 = ', a:'0 + 2 = 2'},
                {q:'0 + 3 = ', a:'0 + 3 = 3'},
                {q:'0 + 4 = ', a:'0 + 4 = 4'},
                {q:'0 + 5 = ', a:'0 + 5 = 5'},
                {q:'0 + 6 = ', a:'0 + 6 = 6'},
                {q:'0 + 7 = ', a:'0 + 7 = 7'},
                {q:'0 + 8 = ', a:'0 + 8 = 8'},
                {q:'0 + 9 = ', a:'0 + 9 = 9'},
                {q:'0 + 10 = ', a:'0 + 10 = 10'},
                {q:'1 + 0 = ', a:'1 + 0 = 1'},
                {q:'1 + 1 = ', a:'1 + 1 = 2'},
                {q:'1 + 2 = ', a:'1 + 2 = 3'},
                {q:'1 + 3 = ', a:'1 + 3 = 4'},
                {q:'1 + 4 = ', a:'1 + 4 = 5'},
                {q:'1 + 5 = ', a:'1 + 5 = 6'},
                {q:'1 + 6 = ', a:'1 + 6 = 7'},
                {q:'1 + 7 = ', a:'1 + 7 = 8'},
                {q:'1 + 8 = ', a:'1 + 8 = 9'}
                       ]
        };

    var deck2 =
    {
        id      : 2,
        name    : 'Kortleksnamn 2',
        desc    : 'Kortlek nummer 2',
        cards   : [
            {q:"1 - 1 = ", a:"1 - 1 = 0"},
            {q:"2 - 2 = ", a:"1 - 2 = 0"},
            {q:"3 - 3 = ", a:"1 - 3 = 0"}
        ]
    };






    return {
        getAddDecks     : getAddDecks
    };

})();

