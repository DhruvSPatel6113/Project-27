class Bob{
    constructor(x,y,radius){

       var options={
            isStatic:false,
            restitution:0.4,
            friction:0.3,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;

        ellipseMode(CENTER);
        stroke(0);
        fill("purple");
        ellipse(pos.x,pos.y,28,28);
        
    }

}