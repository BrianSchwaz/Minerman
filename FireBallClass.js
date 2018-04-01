class FireBall{
	constructor(fireballimg,direction,pos,rpos,f,v)
	{
		this.img = fireballimg;
		this.dir = direction;
		this.spriteSizeX = 212; 
		this.spriteSizeY = 81;
		this.position = pos;
		this.realpos = rpos;
		this.frame = f;
		this.velocity = v;
	}
}