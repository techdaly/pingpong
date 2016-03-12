var pingPong = function(userNumber){
  for (var i=0; i<=25; i++){
if ((i%3===0) && (i%5===0)){
alert ("ping pong")
} else if (i%3===0){
alert ("ping")
} else if (i%5===0){
alert ("pong")
} else {
alert (i)
}
}
}
