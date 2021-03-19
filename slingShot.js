class SlingShot{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.sling= Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;

    }

    display(){
        if(this.sling.bodyA){
     strokeWeight(5);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}

    fly(){
        this.sling.bodyA=null;
    }
}