class paper {
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.7,
            density:1
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50;
        World.add(world, this.body)
    }

    display(){
            var pos = this.body.position
            push()
			translate(pos.x, pos.y);
			rotate (this.body.angle)	
			imageMode(CENTER);
			image(this.image,0,0,this.radius,this.radius)
			pop()

    
}
}