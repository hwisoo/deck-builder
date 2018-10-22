$(document).ready(function() {

var cardNumber = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var cardSuits = ["clubs", "hearts", "diamonds", "spades"]

cardSuits.forEach(function(suit){
  cardNumber.forEach(function(card){
    $("#story").append(card + " " + 'of' + " " + suit + '<br>');

  })
})

})
