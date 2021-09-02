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
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    boxer1 = createSprite(windowWidth/2+400,windowHeight/2);
    boxer1.addImage("boxer1",boxer1Img);  
    boxer2 = createSprite(windowHeight/2,windowHeight/2);
    boxer2.addImage("boxer2",boxer2Img);
    boxer2.scale=1.6
    boxer2.depth = boxer1.depth
    boxers = [boxer1,boxer2]
  
    console.log(boxers);
  }
  

  play(){
    form.hide();
    console.log("play")
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      
      image(bgImg,0,0,windowWidth,windowHeight);
    
 
      var index = 0;
      
      var x ;
      var y ;

      // for(var plr in allPlayers){

      // index +=1;

      // y = displayHeight - allPlayers[plr].distance;
      // boxers[index-1].x = x;
      // boxers[index-1].y = y;
      
      // if(index === player.index){
      //   boxers[index - 1].shapeColor = "red";
      //   camera.position.x = displayWidth/2;
      //   camera.position.y = boxers[index-1].y;
      //   stroke(10)
      //   fill("red")
      //   ellipse(x,y,60,60)
      // }}


      drawSprites()
    }
   
    if(keyIsDown(RIGHT_ARROW)){
      boxer1.x+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      boxer1.x-=2
    }
    if(keyIsDown(UP_ARROW)){
      boxer1.y-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      boxer1.y+=2
    }
    if(keyIsDown(68)){
      boxer2.x+=2
    }
    if(keyIsDown(65)){
      boxer2.x-=2
    }
    if(keyIsDown(87)){
      boxer2.y-=2
    }
    if(keyIsDown(83)){
      boxer2.y+=2
    }
    
    
  }

  

}