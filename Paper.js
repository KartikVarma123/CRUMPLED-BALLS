class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution: 0.3,
            friction:0,
            density:1.2

			}
		this.r = r
		this.body=Bodies.circle(x, y,r-20, options);
 		World.add(world, this.body);
         this.paper_img = loadImage("paper.png");

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.paper_img,0,0,this.r);
			pop()
			
	}

}