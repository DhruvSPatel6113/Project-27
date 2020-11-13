class Roof{
    constructor(x, y, width, height){

       var options={
            isStatic:true
        }

        this.body=Matter.Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);

        this.width=width;
        this.height=height;
        
    }

    display(){

        var pos=this.body.position;

        rectMode(CENTER);
        stroke(0);
        fill("grey");
        rect(pos.x, pos.y, this.width ,this.height);

    }
}