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
    p1 = createSprite(200,850);

    //Plataformas del juego
    g1= createSprite(950,950,1900,50)
    g1.shapeColor="#5c1900";

    g2 = createSprite (900,800,200,300);
    g2.shapeColor="#5c1900";




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
    p1.collide(g1,jump)
    p1.collide(g2,jump)
    console.log(p1.collide)
    drawSprites();


}

function jump(){
    if (keyDown("space")){
        p1.velocityY = p1.velocityY -17
    }
    
}