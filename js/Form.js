class Form{

    constructor(){



    }
    
    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Play");
        button.position(130,200);

        var greeting = createElement("h3");

        button.mousePressed(function(){


            input.hide();
            button.hide();


            var name = input.value();

            playerCount += 1;
            //S: wrong : player.update();
            player.update(name);
            //S: missed this line
            player.updateCount(playerCount);

            greeting.html("hello " + name);
            greeting.position(130,160);
        })


        }
    }