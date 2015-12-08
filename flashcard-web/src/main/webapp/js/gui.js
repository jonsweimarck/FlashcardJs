var Gui = (function () {

    var countdownTimer;
    var seconds;
    var flipDivClone;

    var init = function(cardOkFunc, cardNokFunc){

        $("#showcardok_butt").off("click").click(cardOkFunc);
        $("#showcardnok_butt").off("click").click(cardNokFunc);
        $("#flip_butt").off("click").click(flipCard);

        flipDivClone = $("#flipid").clone();
    };

    var showCard = function(card){
        $("#missedcard_div").hide();
        $("#finished_div").hide();
        $("#showcard_div").show();

        resetCardDiv();
        $('.front').find("p:first").text(card.q);
        $('.back').find("p:first").text(card.a);
        resetTimer();
        enableFlipbutton();

        function resetCardDiv() {
            $("#flipid").replaceWith(flipDivClone.clone());
            //$("#flipid").removeClass('flip');
            //$("#showcard_div").css("display","none");
            //$("#flipid").attr("class","click panel");
            //$("#showcard_div").css("display","inline");
            //$("#showcard_div").show();
        }

        function enableFlipbutton(){
            document.getElementById("flip_butt").disabled = false;
            $("#flip_butt").removeClass("disabled");
        }

        function resetTimer(){
            if(countdownTimer != undefined){
                clearInterval(countdownTimer);
            }
            seconds = 4;
            countdownTimer = setInterval(function(){secondPassed();}, 1000);
            document.getElementById('flip_butt').innerHTML = "<i class='icon-eye-open icon-white'></i>  (" + (seconds + 1) + ")";
        }
    };

    var showMissedCards = function(nbrCardsOkFirstRound, nbrCardsMissedFirstRound, startMissedCardRoundFunc){
        $("#showcard_div").hide();
        $("#finished_div").hide();
        $("#missedcard_div").show();

        var missedText_1 = "Du klarade " + nbrCardsOkFirstRound + " kort direkt,";
        var missedText_2 = "men hade problem med " + nbrCardsMissedFirstRound + ". ";
        if(nbrCardsMissedFirstRound > 1 ){
            var missedText_3 = "Vi visar om de korten tills du klarar dem!";
        } else {
            var missedText_3 = "Vi visar om det kortet tills du klarar det!";
        }

        $("#missedcard_text1").text(missedText_1);
        $("#missedcard_text2").text(missedText_2);
        $("#missedcard_text3").text(missedText_3);
        $("#missedcard_butt").off("click").click(startMissedCardRoundFunc);
    };

    var showUpdatedGraph = function(okFirstRound, okOtherRounds, missed, left){
        console.log(
                " okFirstRound: "   + okFirstRound +
                ", okOtherRounds: " + okOtherRounds +
                ", missed: "        + missed +
                ", left: "          + left);

        drawChart(okFirstRound, okOtherRounds, missed, left);
    };
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
    };

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
        document.getElementById('flip_butt').innerHTML = "<i class='icon-eye-open icon-white'></i>  (" + seconds + ")";

        if (seconds == 0) {
            flipCard();
        } else {
        seconds--;
        }


     }

    function flipCard(){
        clearInterval(countdownTimer);
        $("#flipid").addClass('flip');
        disableFlipbutton();

        function disableFlipbutton(){
            document.getElementById("flip_butt").disabled = true;
            $("#flip_butt").addClass("disabled");
            document.getElementById('flip_butt').innerHTML = "<i class='icon-eye-close icon-white'></i>  (0)";
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

