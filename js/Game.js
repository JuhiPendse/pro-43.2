class Game {
  constructor(){
  }

  getState(){
    var gameStateRef = database.ref('ref');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState:state
    })
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCount.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    boxer1 = createSprite(1000,400);
    boxer1.addImage("boxer1",boxer1Img);
    boxer2 = createSprite(200,400);
    boxer2.addImage("boxer2",boxer2Img);
    boxers = [boxer1,boxer2]
  }
  

  play(){
    form.hide();

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      (bgImg, -displayWidth*4,-displayHeight*4,windowWidth,windowHeight);
 
      var index = 0;
      
      var x = 175;
      var y ;

      y = displayHeight - allPlayers[plr].distance;
      boxers[index-1].x = x;
      boxers[index-1].y = y;
      
      if(index === player.index){
        boxers[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = boxers[index-1].y;
        stroke(10)
        fill("red")
        ellipse(x,y,60,60)
      }

    }

    if(keyIsDown("D") && player.index !== null){
      player.x+=1
      player.update()
    }

    drawSprites();
  }
}