var bg;
var player;
var p1;
var g1, g2, g3, g4;

function preload (){
 bg = loadImage("pastizales.jpg");  
 player = loadImage("jugador.jpg");
 sun = loadImage("sun.png")
}


function setup (){
    createCanvas(1900,950);

    //Jugador 
    p1 = createSprite(200,50);
    p1.shapeColor="cyan"

    //Sprite de Ganar
    s1 = createSprite(7400,180,150,150);
    s1.shapeColor = "yellow"
    //s1.addImage(sun);

    //Plataformas del juego
    g1= createSprite(950,950,1900,50)
    g1.shapeColor="#5c1900";
    g2 = createSprite (900,800,200,300);
    g2.shapeColor="#5c1900";
    g3= createSprite(3400,950,1200,50)
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
    g10 = createSprite (4400,935,200,30);
    g10.shapeColor="#5c1900";
    g11 = createSprite (3900,300,40,600);
    g11.shapeColor="#5c1900";
    g12 = createSprite (3700,750,200,30);
    g12.shapeColor="#5c1900";
    g13 = createSprite (3850,400,120,30);
    g13.shapeColor="#5c1900";
    g14 = createSprite (4650,740,150,30);
    g14.shapeColor="#5c1900";
    g15 = createSprite (4200,550,150,30);
    g15.shapeColor="#5c1900";
    g16 = createSprite (4650,400,150,30);
    g16.shapeColor="#5c1900";
    g17 = createSprite (4200,200,150,30);
    g17.shapeColor="#5c1900";
    g18 = createSprite (5350,15,2300,30);
    g18.shapeColor="#5c1900";
    g19 = createSprite (4745,300,40,230);
    g19.shapeColor="#5c1900";
    g20 = createSprite (5000,300,150,30);
    g20.shapeColor="#5c1900";
    g21 = createSprite (5400,900,150,30);
    g21.shapeColor="#5c1900";
    g22 = createSprite (5800,300,150,30);
    g22.shapeColor="#5c1900";
    g23 = createSprite (6000,800,150,30);
    g23.shapeColor="#5c1900";
    g24 = createSprite (6400,500,150,30);
    g24.shapeColor="#5c1900";
    g25 = createSprite (6500,0,40,230);
    g25.shapeColor="#5c1900";

    gf = createSprite (7400,750,1250,399);
    gf.shapeColor="#5c1900";

    //ENEMIGOS Y PAREDES INVISIBLES
    //Enemigos Rojos
    ee1 = createSprite(3500,530);
    ee1.shapeColor="red"
    ee1.velocityX = 7;
    i11 = createSprite(3000,550);
    i12 = createSprite(3605,550);
    i11.visible = false;
    i12.visible = false;

    ee2 = createSprite(1400,875);
    ee2.shapeColor="red"
    ee2.velocityX = 7;
    i13 = createSprite(1780,875);
    i14 = createSprite(1000,875);
    i13.visible = false;
    i14.visible = false;

    ee3 = createSprite(2095,480);
    ee3.shapeColor="red"
    ee3.velocityX = 7;
    i15 = createSprite(1750,480);
    i16 = createSprite(2450,480);
    i15.visible = false;
    i16.visible = false;

    ee4 = createSprite(4400,480);
    ee4.shapeColor="red"
    ee4.velocityY = 7;
    i17 = createSprite(4400,20);
    i18 = createSprite(4400,950);
    i17.visible = false;
    i18.visible = false;

    //Enemigos Morados

    em1 = createSprite(3500,200);
    em1.shapeColor="purple"
    em1.velocityX = 12;
    i21 = createSprite(2900,200);
    i22 = createSprite(3605,200);
    i21.visible = false;
    i22.visible = false;

    em2 = createSprite(4900,100);
    em2.shapeColor="purple"
    em2.velocityX = 14;
    i23 = createSprite(4400,100);
    i24 = createSprite(5600,100);
    i23.visible = false;
    i24.visible = false;

    em3 = createSprite(5950,100);
    em3.shapeColor="purple"
    em3.velocityX = 14;
    i25 = createSprite(5500,100);
    i26 = createSprite(6450,100);
    i25.visible = false;
    i26.visible = false;

    em4 = createSprite(6700,200);
    em4.shapeColor="purple"
    em4.velocityY = 11;
    i27 = createSprite(6700,20);
    i28 = createSprite(6700,600);
    i27.visible = false;
    i28.visible = false;

    //7820 de ancho mitad 3910
    //BORDES DEL JUEGO
    //inferior
    b1 = createSprite(3920,960,7820,20);
    b1.shapeColor = "black";

    //superior
    b2 = createSprite(3920,-10,7820,20);
    b2.shapeColor = "black";

    //derecho
    b3 = createSprite(7833,475,20,990);
    b3.shapeColor = "black"

    //izquierdo
    b4 = createSprite(-10,475,20,990);
    b4.shapeColor = "black"




}


function draw (){
        
    //fondo de pantalla
    background(20,20,10);
    image(bg, -300,0,displayWidth*6, 950);


    //moviemto jugador

    if (p1.x > 958 && p1.x < 6875){
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

    //Colisiones p1 con la plataforma
    p1.collide(g1,jump);
    p1.collide(g2,jump);
    p1.collide(g3,jump);
    p1.collide(g4,jump);
    p1.collide(g5,jump);
    p1.collide(g6);
    p1.collide(g7,jump);
    p1.collide(g8,jump);
    p1.collide(g9,jump);
    p1.collide(g10,jump);
    p1.collide(g12,jump);
    p1.collide(g11);
    p1.collide(g13,jump);
    p1.collide(g14,jump);
    p1.collide(g15,jump);
    p1.collide(g16,jump);
    p1.collide(g17,jump);
    p1.collide(g18,jump);
    p1.collide(g19);
    p1.collide(g20, jump);
    p1.collide(g21, jump);
    p1.collide(g22, jump);
    p1.collide(g23, jump);
    p1.collide(g24, jump);
    p1.collide(g25);
    p1.collide(gf,jump);

    //Colision con los bordes
    p1.collide(b2);
    p1.collide(b3);
    p1.collide(b4);


    //REBOTES DE LOS ENEMIGOS
    //Enemigos Rojos
    ee1.bounceOff(i11);
    ee1.bounceOff(i12);
    ee2.bounceOff(i13);
    ee2.bounceOff(i14);
    ee3.bounceOff(i15);
    ee3.bounceOff(i16);
    ee4.bounceOff(i17);
    ee4.bounceOff(i18);


    //Enemigos Morados
    em1.bounceOff(i21);
    em1.bounceOff(i22);
    em2.bounceOff(i23);
    em2.bounceOff(i24);
    em3.bounceOff(i25);
    em3.bounceOff(i26);
    em4.bounceOff(i27);
    em4.bounceOff(i28);

    drawSprites();

    if(p1.isTouching(b1) ||
    p1.isTouching(b1) ||
    p1.isTouching(ee1) ||
    p1.isTouching(ee2) ||
    p1.isTouching(ee3) ||
    p1.isTouching(ee4) ||
    p1.isTouching(em1) ||
    p1.isTouching(em2) ||
    p1.isTouching(em3) ||
    p1.isTouching(em4)){
        p1.x = 200;
        p1.y = 800;
        camera.position.x = 950;
    }

    
}

function jump(){
    if (keyDown("space")){
        
        if(p1.velocityY > -17   &&  p1.velocityY <17){
            p1.velocityY = p1.velocityY -17    
        }
    }
    
}

function mouseClicked(){
    p1.y = mouseY;
}
