const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,thunderbolt1,rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9,rain10,rain11,rain12,rain13,rain14,rain15,rain16,rain17,rain18,rain19,rain20,rain21,rain22,rain23,rain24,rain25,rain26,rain27,rain28,rain29,rain30;
var rain31,rain32,rain33,rain34,rain35,rain36,rain37,rain38,rain39,rain40,rain41,rain42,rain43,rain44,rain45,rain46,rain47,rain48,rain49,rain50,rain51,rain52,rain53,rain54,rain55,rain56,rain57,rain58,rain59,rain60,rain61,rain62,rain63,rain64,rain65,rain66;




function setup(){
   
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
     
    rain1 = new Rain(200,200,10,10)
    rain2 = new Rain(250,200,10,10)
    rain3 = new Rain(300,200,10,10)
    rain4 = new Rain(350,200,10,10)
    rain5 = new Rain(150,200,10,10)
    rain6 = new Rain(450,200,10,10)
    rain7 = new Rain(500,200,10,10)
    rain8 = new Rain(550,200,10,10)
    rain9 = new Rain(600,200,10,10)
    rain10 = new Rain(650,200,10,10)
    rain11 = new Rain(700,200,10,10)
    rain12 = new Rain(200,200,10,10)
    rain13 = new Rain(250,200,10,10)
    rain14 = new Rain(300,200,10,10)
    rain15 = new Rain(350,200,10,10)
    rain16 = new Rain(150,200,10,10)
    rain17 = new Rain(450,200,10,10)
    rain18 = new Rain(500,200,10,10)
    rain19 = new Rain(550,200,10,10)
    rain20 = new Rain(600,200,10,10)
    rain21 = new Rain(650,200,10,10)
    rain22 = new Rain(700,200,10,10)
    rain23 = new Rain(200,200,10,10)
    rain24= new Rain(150,200,10,10)
    rain25 = new Rain(250,200,10,10)
    rain26 = new Rain(300,200,10,10)
    rain27 = new Rain(350,200,10,10)
    rain28 = new Rain(550,200,10,10)
    rain29 = new Rain(450,200,10,10)
    rain30 = new Rain(500,200,10,10)
    rain31 = new Rain(600,200,10,10)
    rain32 = new Rain(650,200,10,10)
    rain33 = new Rain(700,200,10,10)
    rain34 = new Rain(200,200,10,10)
    rain35 = new Rain(250,200,10,10)
    rain36 = new Rain(300,200,10,10)
    rain37 = new Rain(350,200,10,10)
    rain38 = new Rain(150,200,10,10)
    rain39 = new Rain(450,200,10,10)
    rain40 = new Rain(500,200,10,10)
    rain41 = new Rain(550,200,10,10)
    rain42 = new Rain(600,200,10,10)
    rain43 = new Rain(650,200,10,10)
    rain44 = new Rain(700,200,10,10)
    rain45 = new Rain(200,200,10,10)
    rain46 = new Rain(250,200,10,10)
    rain47 = new Rain(300,200,10,10)
    rain48 = new Rain(350,200,10,10)
    rain49 = new Rain(150,200,10,10)
    rain50 = new Rain(450,200,10,10)
    rain51 = new Rain(500,200,10,10)
    rain52 = new Rain(550,200,10,10)
    rain53 = new Rain(600,200,10,10)
    rain54 = new Rain(650,200,10,10)
    rain55 = new Rain(700,200,10,10)
    rain56 = new Rain(200,200,10,10)
    rain57 = new Rain(150,200,10,10)
    rain58 = new Rain(250,200,10,10)
    rain59 = new Rain(300,200,10,10)
    rain60 = new Rain(350,200,10,10)
    rain61 = new Rain(550,200,10,10)
    rain62 = new Rain(450,200,10,10)
    rain63 = new Rain(500,200,10,10)
    rain64 = new Rain(600,200,10,10)
    rain65 = new Rain(650,200,10,10)
    rain66 = new Rain(700,200,10,10)

    boy = new Boy(400,700,10,10);
    thunderbolt1 = new Thunder(400,100,100,10);
    
}

function draw(){

   background("black")
   
   Engine.update(engine);

   drawSprites();


   boy.display();
   thunderbolt1.display();
   rain1.display();
   rain2.display();
   rain3.display();
   rain4.display();
   rain5.display();
   rain6.display();
   rain7.display();
   rain8.display();
   rain9.display();
   rain10.display();
   rain11.display();
   rain12.display();
   rain13.display();
   rain14.display();
   rain15.display();
   rain16.display();
   rain17.display();
   rain18.display();
   rain19.display();
   rain20.display();
   rain21.display();
   rain22.display();
   rain23.display();
   rain24.display();
   rain25.display();
   rain26.display();
   rain27.display();
   rain28.display();
   rain29.display();
   rain30.display();
   rain31.display();
   rain32.display();
   rain33.display();
   rain34.display();
   rain35.display();
   rain36.display();
   rain37.display();
   rain38.display();
   rain39.display();
   rain40.display();
   rain41.display();
   rain42.display();
   rain43.display();
   rain44.display();
   rain45.display();
   rain46.display();
   rain47.display();
   rain48.display();
   rain49.display();
   rain50.display();
   rain51.display();
   rain52.display();
   rain53.display();
   rain54.display();
   rain55.display();
   rain56.display();
   rain57.display();
   rain58.display();
   rain59.display();
   rain60.display();
   rain61.display();
   rain62.display();
   rain63.display();
   rain64.display();
   rain65.display();
   rain66.display();
}   

