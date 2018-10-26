import {getRandomUnitVector} from './utilities.js';
export {createCircleSprites,createSquareSprites,createImageSprites,createLineSprites};

class sprite{
		constructor(x,y,fwd,speed){
			this.x = x;
			this.y = y;
			this.fwd = fwd;
			this.speed = speed;
		}
		//  methods
		move(){
				this.x += this.fwd.x * this.speed;
				this.y += this.fwd.y * this.speed;
		}
		reflectX(){
			this.fwd.x *= -1;
		}
		reflectY(){
			this.fwd.y *= -1;
		}
}

class circleSprite extends sprite{
	constructor(rect,radius,color)
	{
		super(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, getRandomUnitVector(), 2);
		this.radius = radius;
		this.color = color;
	}
	draw(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}
}

class squareSprite extends sprite{
	constructor(rect,width,height,color){
		super(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, getRandomUnitVector(), 2);
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw(ctx){ 
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.restore();
	}
}

class imageSprite extends sprite{
	constructor(rect,width,height,image){
		super(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, getRandomUnitVector(), 2);
		this.width = width;
		this.height = height;
		this.image = image;
	}
	draw(ctx){
		ctx.save();
		ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
		ctx.restore();
	}
}

class lineSprite extends sprite{
	constructor(rect,length,color){
		super(Math.random() * rect.width + rect.left, Math.random() * rect.height + rect.top, getRandomUnitVector(), 2);
		this.length = length;
		this.height = 5;
		this.color = color;
	}
	draw(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + this.length, this.y);
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.height;
		ctx.stroke();
		ctx.restore();
	}
}

function createCircleSprites(num=20, rect={left:0,top:0,width:300,height:300}, color="Blue", radius=5){
	let sprites = [];
	for(let i=0;i<num;i++){
		sprites.push(new circleSprite(rect,radius,color));
	}
	
	return sprites; 
}

function createSquareSprites(num=20, rect={left:0,top:0,width:300,height:300}, color="Blue", width=10, height=10){
	let sprites = [];
	for(let i=0;i<num;i++){
		sprites.push(new squareSprite(rect,width,height,color));
	}
	
	return sprites; 
}

function createImageSprites(num=20, rect={left:0,top:0,width:300,height:300}, width=30, height=30, url="images/Sean.png"){
	let sprites = [];
	let image = new Image();
	image.src = url; 
	for(let i=0;i<num;i++){
		sprites.push(new imageSprite(rect,width,height,image));
	}
	
	return sprites; 
}

function createLineSprites(num=20, rect={left:0,top:0,width:300,height:300}, color="Blue", length=10){
	let sprites = [];
	for(let i=0;i<num;i++){
		sprites.push(new lineSprite(rect,length,color));
	}
	
	return sprites; 
}