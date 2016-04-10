/*
 * Antoine Coulombe
 * 10/04/2016
 * 
 * FreeCodeCamp - Calculator
 */

$(document).ready(function () {
    $("body").append('<div id="calculator"></div>');
    setCalculatorPos();
    setCalculator();
    
    $("#eq").keypress(function(e) {
        filterInput("eq", String.fromCharCode(e.keyCode));
        return false;
    });
});

window.onresize = function(event) {
    setCalculatorPos();
};

// Calculator
function setCalculator() {
    var calc = document.getElementById("calculator");
    
    $(calc).append('<input type="text" id="eq"/>');
}

function setCalculatorPos() {
    var height = window.innerHeight / 2 - $("#calculator").height() / 2;
    $("#calculator").css("top", height);
}

function filterInput(id, letter) {
    var input = $("#" + id);
    var text = input.val();
    
    // TO DO - FILTER KEYPRESSES
}