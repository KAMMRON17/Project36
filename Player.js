class Player{
constructor(){



}
getCount(){
var getCountref=database.ref('playerCount');
getCountref.on("value",function(data){
playerCount=data.val();
})

}
updateCount(count){
database.ref('/').update({
    playerCount:count
});

}
update(playerName){
    var playerIndex="players/player"+playerCount
database.ref(playerIndex).update({
    name:playerName
});
}

}