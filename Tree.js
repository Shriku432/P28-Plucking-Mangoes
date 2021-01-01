class Tree{
constructor(x,y,options){
var options={
 isStatic:true   
}
this.x=x;
this.y=y;
//this.r=r;
//this.body=Bodies.rectangle(x,y,100,100)
this.image=loadImage("tree.png");
//World.add(world,this.body)


}

display(){
//var treePos=this.body.position
push();
translate(this.x,this.y);
fill(255)
imageMode(CENTER)
image(this.image,0,0,570,600)
pop();
}
}