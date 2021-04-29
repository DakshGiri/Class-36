class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state,


        })
    }
    start(){
        if(gameState==0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
     //       var pos = 130;
            for(var i in allPlayers){
                text(allPlayers[i].name);
            }
        }
    }
}