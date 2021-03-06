import {} from './utilities.js';
import {rowWidth,colWidth,topSpacing,leftSpacing} from './main.js';
export {createCircleSprite,createSquareSprite,createImageSprite,createSound};

class sprite{
		constructor(x,y){
			this.x = x;
			this.y = y;
		}
}

class circleSprite extends sprite{
	constructor(x,y,radius,color)
	{
		super(x,y,radius,color);
		this.radius = radius;
		this.color = color;
	}
	draw(ctx){
		ctx.save();
		ctx.beginPath();
		ctx.arc((this.x * colWidth) + leftSpacing + (colWidth / 2), (this.y * rowWidth) + topSpacing + (rowWidth / 2), this.radius, 0, Math.PI*2, false);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}
	move(x,y){
		this.x += x;
		this.y += y;
	}
	place(x,y){
		this.x = x;
		this.y = y;
	}
}

class squareSprite extends sprite{
	constructor(x,y,width,height,color){
		super(x, y);
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw(ctx){ 
		ctx.save();
		ctx.strokeStyle = this.color;
		ctx.fillStyle = "#b37700";
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		//ctx.fillStyle = "#b37700";
		//ctx.fillRect(this.x+3, this.y+3, this.width-6, this.height-6);
		ctx.restore();
	}
}

class imageSprite extends sprite{
	constructor(x,y,width,height,image){
		super(x,y);
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

function createCircleSprite(x=0, y=0, color="Blue", radius=5){
	return new circleSprite(x,y,radius,color); 
}

function createSquareSprite(x=0, y=0, color="Blue", width=10, height=10){
	return new squareSprite(x,y,width,height,color); 
}

function createImageSprite(x, y, width=75, height=75, url="images/portal.png"){
	let image = new Image();
	image.src = url;
	return new imageSprite(x,y,width,height,image); 
}

class sound{
	constructor(src, loop){
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";

		if (loop)
		{
			this.sound.addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
			}, false);
		}
		
		document.body.appendChild(this.sound);
	}
	play(){
        this.sound.play();
    }
    stop(){
        this.sound.pause();
    }
}

function createSound(src, loop) {
	return new sound(src, loop); 
}