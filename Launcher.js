class Launcher{
    constructor(bodyA, pointB){
var options={
bodyA:bodyA,
pointB:pointB, 
stiffness:0.04, 
length:1

}

this.launch = Constraint.create(options)

World.add(world,this.launch);
console.log(launcher);
this.bodyA=bodyA;
this.pointB = pointB;
}



fly(){
    this.launch.bodyA = null;
}
  

attach(body) {
    this.launch.bodyA = body;
   }
    
    
    display(){

if(this.launch.bodyA){
    var pointA = this.launch.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    }
}
