var bg;
var player;
var p1;
var g1, g2, g3, g4;

function preload (){
 bg = loadImage("pastizales.jpg");  
 player = loadImage("jugador.jpg");
}


function setup (){
    createCanvas(1900,950);

    //Jugador 
    p1 = createSprite(3700,850);
    p1.shapeColor="cyan"

    //Plataformas del juego
    g1= createSprite(950,950,1900,50)
    g1.shapeColor="#5c1900";

    g2 = createSprite (900,800,200,300);
    g2.shapeColor="#5c1900";

    g3= createSprite(3400,950,800,50)
    g3.shapeColor="#5c1900";

    g4 = createSprite (1350,500,200,50);
    g4.shapeColor="#5c1900";

    g5= createSprite(2100,400,300,50)
    g5.shapeColor="#5c1900";

    g6 = createSprite (3600,525,50,810);
    g6.shapeColor="#5c1900";

    g7 = createSprite (3300,750,180,30);
    g7.shapeColor="#5c1900";

    g8 = createSprite (3300,450,550,30);
    g8.shapeColor="#5c1900";

    g9 = createSprite (3230,135,700,30);
    g9.shapeColor="#5c1900";


}


function draw (){
        
    //fondo de pantalla
    background(20,20,10);
    image(bg, -300,0,displayWidth*6, 950);


    //moviemto jugador

    if (p1.x > 800 && camera.position.x > 800){
        camera.position.x = p1.x
    }
    
    camera.position.y = 475;

    if (keyDown("RIGHT")){
        p1.x += 13
    }

    if (keyDown("LEFT")){
        p1.x -= 13
    }  

    p1.velocityY += 0.8
    
    
    
    //console.log(mouseX);
    //console.log(mouseY);
    console.log("X: " + p1.x);
    console.log("MouseY: " + mouseY);

    //Colisiones de p1
    p1.collide(g1,jump)
    p1.collide(g2,jump)
    p1.collide(g3,jump)
    p1.collide(g4,jump)
    p1.collide(g5,jump)
    p1.collide(g6)
    p1.collide(g7,jump)
    p1.collide(g8,jump)
    p1.collide(g9,jump)

    drawSprites();

}

function jump(){
    if (keyDown("space")){
        
        if(p1.velocityY > -17   &&  p1.velocityY <17){
            p1.velocityY = p1.velocityY -17    
        }
    }
    
}