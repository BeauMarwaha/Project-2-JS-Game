import {createCircleSprites,createSquareSprites,createImageSprites,createLineSprites} from './classes.js';
export {init};

const ctx = document.querySelector("canvas").getContext("2d");
const screenWidth = 600;
const screenHeight = 400;
let sprites = [];

function init(){
	let margin = 50;
	let rect = {left: margin, top: margin, width: screenWidth - margin*2, height: screenHeight-margin*2}
	let rect2 = {left: margin, top: margin, width: screenWidth - margin*2, height: screenHeight-margin*2 - 100}
	sprites = sprites.concat(
        createCircleSprites(20,rect,"Red",10),
        createCircleSprites(15,rect,"Blue",5),
        createSquareSprites(10,rect,"Green",10,15),
        createSquareSprites(10,rect,"Gray",5,5),
        createImageSprites(10,rect2,50,100,"images/Sean.png"),
        createImageSprites(10,rect2,50,50,"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png"),
        createLineSprites(5,rect,"Orange",30),
        createLineSprites(5,rect,"Purple",50));
	loop();
}

function loop(){
	// schedule a call to loop() in 1/60th of a second
	requestAnimationFrame(loop);
	
	// draw background
	ctx.fillRect(0,0,screenWidth,screenHeight)
	
	// loop through sprites
	for (let s of sprites){
		// move sprites
		s.move();
		
		// check sides and bounce
		if(s.radius){
            // a circle
            if (s.x <= s.radius || s.x >= screenWidth-s.radius){
                s.reflectX();
                s.move();
            }
            if (s.y <= s.radius || s.y >= screenHeight-s.radius){
                s.reflectY();
                s.move();
            }
        }else{ // `s` is NOT a circle
            // left and right
            if (s.x <= 0 || s.x >= screenWidth-s.width){
                s.reflectX();
                s.move();
            }
            // top and bottom
            if (s.y <= 0 || s.y >= screenHeight-s.height){
                s.reflectY();
                s.move();
            }
        } // end if s.radius
	
	    // draw sprites
		s.draw(ctx);
	} // end for
} // end loop()