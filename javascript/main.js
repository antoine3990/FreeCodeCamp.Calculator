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
});

window.onresize = function(event) {
    setCalculatorPos();
};

// Calculator
function setCalculator() {
    var $calc = $("calculator");
    var textbox = document.createElement("input");
    document.getElementById("calculator").appendChild(textbox);
}

function setCalculatorPos() {
    var height = window.innerHeight / 2 - $("#calculator").height() / 2;
    $("#calculator").css("top", height);
}