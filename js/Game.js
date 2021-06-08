class Game{

    constructor(){

    }

    getState(){
        //refer the data
        var gameStateRef = database.ref('gameState');
        
        //listen to what is happening in the database
        gameStateRef.on("value", function(data){

            //capture the data
            gameState = data.val()

        })


    }

    update(state){

        //forward slash represents parent node
        database.ref('/').update({

            'gameState' : state

        })

    }

    start(){

            if(gameState === 0)
            {
                form = new Form();
                form.display();

                player = new Player();
                player.getCount();
            }



    }
}