var Gui = (function () {

    var countdownTimer;
    var seconds;

    var init = function(cardOkFunc, cardNokFunc, startAgainFunc){

        $("#showcardok_butt").off("click").click(cardOkFunc);
        $("#showcardnok_butt").off("click").click(cardNokFunc);
        $("#finished_butt").off("click").click(startAgainFunc);
    }

    var showCard = function(card){
        $("#missedcard_div").hide();
        $("#finished_div").hide();
        $("#showcard_div").show();
        $("#showcardq").text(card.q);

        $("#flipid").removeClass('flip');
        $('.front').find("p:first").text(card.q);
        $('.back').find("p:first").text(card.a);


        countdownTimer = setInterval(function(){secondPassed();}, 1000);
        seconds = 5;
    }

    var showMissedCards = function(cards, startMissedCardRoundFunc){
        $("#showcard_div").hide();
        $("#finished_div").hide();
        $("#missedcard_div").show();
        var missedText = "Du hade bara fel på " + cards.length + " kort: ";
        for (var i = 0; i < cards.length; i++) {
            missedText += cards[i].q + " ";
        }
        $("#missedcard_text").text(missedText);
        $("#missedcard_butt").off("click").click(startMissedCardRoundFunc);
    }

    var showUpdatedGraph = function(okFirstRound, okOtherRounds, missed, left){
        $("#showgraph_div").text(
                " okFirstRound: "   + okFirstRound +
                ", okOtherRounds: " + okOtherRounds +
                ", missed: "        + missed +
                ", left: "          + left);

        drawChart(okFirstRound, okOtherRounds, missed, left);
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

    function drawChart(okFirstRound, okOtherRounds, missed, left) {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Klarade direkt',              okFirstRound],
            ['Klarade efter flera försök',  okOtherRounds],
            ['Fel',  		                missed],
            ['Kvar',     	                left],
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

