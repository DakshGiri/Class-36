class Player{
    constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;
    }
    getCount(){
        database.ref('playerCount').on("value", function(data){
            playerCount = data.val();

        })

    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count,

        })
    }

    update(){
        database.ref('players/player'+this.index).set({
        name: this.name,
        distance: this.distance
        })
       
    }
   static getPlayerInfo(){
        database.ref('players').on('value', (data)=>{
        allPlayers = data.val();    
        })
    }
}