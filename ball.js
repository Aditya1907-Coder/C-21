class Ball{
    //setup
    constructor(x,y,radius){
        var options ={
            //gravity
            restitution:0.8

        }
        //whenever you create a property in class, you use keyword this.
        this.body = Bodies.circle(x,y,radius,options)
        //since pe doesn't record w and h , we create properties for them
        this.radius= radius;
       
        World.add(world,this.body);
    }


    //draw
    show(){
        var pos = this.body.position;
        push();
            //color a rect
            fill("cyan");
            //outline
            stroke("grey");
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y, this.radius);
        pop();
    }
}