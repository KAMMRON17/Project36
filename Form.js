class Form{
constructor(){

}
display(){
var title=createElement('h1');
title.html("Car Racing Game");
title.position(130,0);

var input=createInput("Name");
input.position(130,160);

var button=createButton("Play");
button.position(250,200);
button.mousePressed(function(){
input.hide();
button.hide();
var pName=input.value();
playerCount=playerCount+1;
player.updateCount(playerCount);
player.update(pName);
var greetingMessage=createElement('h2');
greetingMessage.html("Hello"+ pName); 
greetingMessage.position(130,100);

});

}
}