class Chain{
    constructor(body1,body2){
          var options={
            bodyA:bird.body,
            bodyB:constrainedlog.body,
            stiffness:0.04,
            lenght:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    
    }
    display(){
        strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y,)

    }
}