class Box{
  constructor(x, y, width, height){

    var options={
    restituition : 1,
    friction:1,
    density:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
  }
display(){
  var pos= this.body.position;
  var angle=this.body.angle
  if(this.body.speed<3){
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER)
  rect(0,0,this.width,this.height)
  pop();
  }
  else{
    World.remove(world,this.body)
    push();
    this.visibility-this.visibility - 5;
    //tint(255,this.visibility)
    //image(this.image,this.body.position.x,this.body.position.y,20,40)
    pop();
  }
}

};
