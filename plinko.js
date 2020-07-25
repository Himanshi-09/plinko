class Plinko {
    constructor(x,y){
        var options = {
            restitution : 0.4,
            isStatic : true
        }
        
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       ellipse(pos.x,pos.y,this.r,this.r);
    }
}