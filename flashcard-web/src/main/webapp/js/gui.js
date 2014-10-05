var Gui = (function () {

    var countdownTimer;
    var seconds;

    var init = function(cardOkFunc, cardNokFunc, startMissedCardRoundFunc){

        $("#showcardok_butt").off("click").click(cardOkFunc);
        $("#showcardnok_butt").off("click").click(cardNokFunc);
    }

    var showCard = function(card){
        $("#missedcard_div").hide();
        $("#finished_div").hide();
        $("#showcard_div").show();

        $("#flipid").removeClass('flip');
        $('.front').find("p:first").text(card.q);
        $('.back').find("p:first").text(card.a);

        resetTimer();

        function resetTimer(){
            if(countdownTimer != undefined){
                clearInterval(countdownTimer);
            }
            seconds = 5;
            countdownTimer = setInterval(function(){secondPassed();}, 1000);
        }
    }

    var showMissedCards = function(nbrCardsOkFirstRound, nbrCardsMissedFirstRound, startMissedCardRoundFunc){
        $("#showcard_div").hide();
        $("#finished_div").hide();
        $("#missedcard_div").show();

        var missedText_1 = "Du klarade " + nbrCardsOkFirstRound + " kort direkt, men hade problem med " + nbrCardsMissedFirstRound + ". ";
        if(nbrCardsMissedFirstRound > 1 ){
            var missedText_2 = "Vi visar om de korten tills du klarar dem!";
        } else {
            var missedText_2 = "Vi visar om det kortet tills du klarar det!";
        }

        $("#missedcard_text").text(missedText_1.concat(missedText_2));
        $("#missedcard_butt").off("click").click(startMissedCardRoundFunc);
    }

    var showUpdatedGraph = function(okFirstRound, okOtherRounds, missed, left){
        console.log(
                " okFirstRound: "   + okFirstRound +
                ", okOtherRounds: " + okOtherRounds +
                ", missed: "        + missed +
                ", left: "          + left);

        drawChart(okFirstRound, okOtherRounds, missed, left);
    }
    var showFinished = function(cardsToshow){
        console.log('showFinished');

        if(cardsToshow.length > 0){
            $("#finished_text").text("Du hade bara problem med:");
            for (var i = 0; i < cardsToshow.length; i++) {
                $("#finished_text").append("<div>" + cardsToshow[i].a + "</div>");
            }
        } else {
            $("#finished_text").text("Du klarade alla kort utan problem!");
        }

        $("#showcard_div").hide();
        $("#missedcard_div").hide();
        $("#finished_div").show();
    }

    function drawChart(okFirstRound, okOtherRounds, missed, left) {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Klarade direkt',              okFirstRound],
            ['Klarade efter flera försök',  okOtherRounds],
            ['Fel',  		                missed],
            ['Kvar',     	                left]
        ]);

        var options = {
            colors:['limegreen','green','red','blue'],
            backgroundColor: '#D0E7EF',
            chartArea:{left:8,top:10,width:"84%",height:"84%"},
            legend:{position: 'none'}, reverseCategories:false
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }



    function secondPassed() {
        document.getElementById('flipbutton').innerHTML = "<i class='icon-eye-open icon-white'></i>  (" + seconds + ")";

        if (seconds == 0) {
        flipCard();
        } else {
        seconds--;
        }

        function flipCard(){
            clearInterval(countdownTimer);
            $("#flipid").addClass('flip');
            disableFlipbutton();

            function disableFlipbutton(){
                document.getElementById("flipbutton").disabled = true;
                document.getElementById("flipbutton").className += " disabled";
                document.getElementById('flipbutton').innerHTML = "<i class='icon-eye-close icon-white'></i>  (0)";
            }
        }

     }

    return {
        init: init,
        showCard: showCard,
        showUpdatedGraph: showUpdatedGraph,
        showMissedCards: showMissedCards,
        showFinished: showFinished
    };

})();

