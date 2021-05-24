var canvas;
var music;
var disc1;
var disc2;
var disc3;
var disc4;
var box;

function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces

    disc1 = createSprite(100,550,180,20);

    disc1.shapeColor = "blue";


    disc2 = createSprite(300,550,180,20);

    disc2.shapeColor = "orange";


    disc3 = createSprite(500,550,180,20);

    disc3.shapeColor = "red"


    disc4 = createSprite(700,550,180,20);

    disc4.shapeColor = "green";



    box = createSprite(Math.round(random(100,700)),50,50,50);

    box.velocityX = Math.round(random(-8,6));

    box.velocityY = Math.round(random(2,8));

    

}

function draw() {
    background(rgb(169,169,169));

    


    if(box.isTouching(disc1)&&box.bounceOff(disc1)) {

        box.shapeColor = disc1.shapeColor;

    }


    if(box.isTouching(disc2)&&box.bounceOff(disc2)) {

        box.shapeColor = disc2.shapeColor;

    }


    if(box.isTouching(disc3)&&box.bounceOff(disc3)) {

        box.shapeColor = disc3.shapeColor;

    }


    if(box.isTouching(disc4)&&box.bounceOff(disc4)) {

        box.shapeColor = disc4.shapeColor;

    }

    edges=createEdgeSprites()

    box.bounceOff(edges)






    drawSprites();

}
