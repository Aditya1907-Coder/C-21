class Ground{
    //setup
    constructor(x,y,w,h){
        var options ={
            //gravity
            isStatic: true
        }
        //whenever you create a property in class, you use keyword this.
        this.body = Bodies.rectangle(x,y,w,h,options)
        //since pe doesn't record w and h , we create properties for them
        this.w= w;
        this.h = h;
        World.add(world,this.body);
    }


    //draw
    show(){
        var pos = this.body.position;
        push();
            //color a rect
            fill(127);
            //outline
            stroke(255);
            rectMode(CENTER);
            rect(pos.x,pos.y, this.w, this.h);
        pop();
    }
}