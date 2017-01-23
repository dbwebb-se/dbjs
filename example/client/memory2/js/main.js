(function () {
    "use strict";

    var cards = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
    ];

    var gamePlan = [];



    /**
     * Shuffle contents of an array by swapping elements.
     */
    function shuffle(array) {
        var i;
        var index;
        var item;

        for (i = array.length - 1; i >= 0; i--) {
            index = Math.floor(Math.random() * (i+1));
            item = array[index];
            array[index] = array[i];
            array[i] = item;
        }
    }



    /**
     * Add eventhandler for all cards on the page.
     */
    function addClickHandlerForCards() {
        var i;
        var elements = document.getElementsByClassName("card");

        var handler = function(event) {
            var item = event.target.id.charAt(4);
            var imageUrl = gamePlan[item];

            event.target.style.backgroundImage = "url(" + imageUrl + ")";

            console.log(event);
            console.log(event.target.id);
            console.log(item);
        };

        for (i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", handler);
        }
    }



    /**
     * Init and scramble the gameplan.
     */
    function init() {
        gamePlan = cards.concat(cards);
        shuffle(gamePlan);
        console.log(gamePlan);

        addClickHandlerForCards();
    }



    // Init
    init();

}());
