
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, catapultObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var launchingForce=100;
 
function preload(){
    boy=loadImage("boy.png");
}

function setup(){
    createCanvas (1300,600);
    engine = Engine.create();
    world = engine.world;
    
    stoneObj= new stone(235,420,30);
    
    mango1= new mango(1300, 210, 25);
    mango2= new mango(880,240,25);
	mango3= new mango(1036,140,25);
	mango4= new mango(1200,180,25);
    mango5= new mango(1100,100,30);
    mango6= new mango(1050,260,30);
    mango7= new mango(1250,280, 30);
    mango8= new mango(980,200,30);
   



    treeObj = new Tree(1100,360);
    groundObject = new ground(width/2,600,width,20);
    launcherObject = new Launcher(stoneObj.body,{x:235, y:420});

   var render= Render.create({
       element:document.body,
       engine:engine,
       options:{
           width:1300,
           height: 600,
           wireframes:false
       }
   });
    Engine.run(engine);
}

function draw(){
    background("white");
    textSize(25);
    text("Press space to play again! !",50,50);
    image(boy ,200,340,200,300)
    //strokeWeight(4);
    
    
    treeObj.display();
    stoneObj.display();
	mango1.display();
    mango2.display();
	mango3.display();
	mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    

    groundObject.display();
    launcherObject.display();
    detectollision(stoneObj,mango1);
    detectollision(stoneObj,mango2);
    detectollision(stoneObj,mango3);
    detectollision(stoneObj,mango4);
    detectollision(stoneObj,mango5);
    detectollision(stoneObj,mango6);
    detectollision(stoneObj,mango7);
    detectollision(stoneObj,mango8);
    
   
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    launcherObject.fly();
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420})
        launcherObject.attach(stoneObj.body);
    }
}

function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
       Matter.Body.setStatic(lmango.body,false);
   }
}

