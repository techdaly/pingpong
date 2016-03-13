var pingPong = function(userNumber){
  for (var i=0; i<=userNumber; i++){
    if ((i%3===0) && (i%5===0)){
      $("ul#pingponglist").append("ping pong" + " ")
    } else if (i%3===0){
      $("ul#pingponglist").append("ping" + " ")
    } else if (i%5===0){
      $("ul#pingponglist").append("pong" + " ")
    } else {
      $("ul#pingponglist").append(i + " ")
    }
  }
}

$("form#input").submit(function(event){
  var userNumber = $("input#userInput").val();

  pingPong(userNumber);


  $("form#input").hide();
  $("form#reset").show();

  event.preventDefault();

});
