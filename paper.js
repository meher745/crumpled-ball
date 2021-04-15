class paper{
    constructor(x,y,r)
    {
        var options={
            'restitution':0.3,
            'isStatic':false,
            'friction':0,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        //strokeWeight(4);
        //stroke("white");
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r+50,this.r+50);//+5
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}