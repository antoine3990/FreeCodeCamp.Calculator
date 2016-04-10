/*
 * Antoine Coulombe
 * 10/04/2016
 * 
 * FreeCodeCamp - Calculator
 */

$(document).ready(function () {
    $("body").append('<div id="calculator"></div>');
    setCalculatorPos();

});

window.onresize = function(event) {
    setCalculatorPos();
};

function setCalculatorPos() {
    var height = window.innerHeight / 2 - $("#calculator").height() / 2;
    $("#calculator").css("top", height);
}