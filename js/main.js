import {createCircleSprite,createSquareSprite,createImageSprite} from './classes.js';
export {init};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const screenWidth = canvas.width;
const screenHeight = canvas.height;
let sprites = [];

function init(){
    document.querySelector("#startButton").onclick = startGame;
}

function startGame(){
    // Hide the Main Menu
    document.querySelector('#mainMenu').style.display = "none";

    // Draw the initial sprites
    sprites = sprites.concat(
        createCircleSprite(20,20,"Red",10),
        createSquareSprite(10,10,"Gray",5,5));

    // Start updating the sprites
	update();
}

function update(){
	// schedule a call to update() in 1/60th of a second
	requestAnimationFrame(update);
	
	// draw the background
	ctx.fillRect(0,0,screenWidth,screenHeight)
	
	// loop through sprites
	for (let sprite of sprites){
	    // draw sprites
		sprite.draw(ctx);
	} 
}