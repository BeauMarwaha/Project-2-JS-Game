import {createCircleSprite,createSquareSprite,createImageSprite,createSound} from './classes.js';
export {init,rowWidth,colWidth,topSpacing,leftSpacing};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const screenWidth = canvas.width;
const screenHeight = canvas.height;
let gameBoard;
const rows = 8;
const rowWidth = 75;
const cols = 8;
const colWidth = 75;
let dots = [];
let endPoints = [];
let teleporters = [];

let turns = 8;
let level = 1;
let paused = true;
// Calculate the top and left spacing to have the game board centered in the bottom middle of the canvas
const topSpacing = 0;
const leftSpacing = 0;

// Set up music & sound effects
let backgroundMusic = createSound("sounds/electronic-base-and-pop-guitar.mp3", true); // Sound from: https://freesound.org/people/frankum/sounds/273300/
let moveSound = createSound("sounds/boop.wav", false); // Sound from: https://freesound.org/people/fordps3/sounds/186669/
let winSound = createSound("sounds/little-boops-loop.wav", false); // Sound from: https://freesound.org/people/newagesoup/sounds/348849/
let loseSound = createSound("sounds/sad-trombone.wav", false); // Sound from: https://freesound.org/people/Timbre/sounds/73750/

function init(){
	if(localStorage.getItem("shift-level") == null){
		localStorage.setItem("shift-level", 1);
	}else{
		level = localStorage.getItem("shift-level");
		console.log(level);
	}
    // Set up the start button to start the game
    document.querySelector("#startButton").onclick = startGame;
    
    // Set up key tracking
    document.addEventListener('keyup', keyPressed, false);
    
    // Start playing the background music
    backgroundMusic.play();
}

function startGame(){
    // Hide the Main Menu
    document.querySelector('#mainMenu').style.display = "none";

    // Initialize empty 2D array of the specified size
    gameBoard = createArray(rows, cols);

    // Start loading the level from an external file and call the levelLoaded function when complete
    readTextFile("levels/level-"+level+".txt", levelLoaded);
}

function restartGame(){
    // Hide the win/lose screens
	document.querySelector('#lossScreen').style.display = "none";
    document.querySelector('#winScreen').style.display = "none";
    
    // Load up the level
	gameBoard = createArray(rows, cols);
	dots = [];
	endPoints = [];
	teleporters = [];
	readTextFile("levels/level-"+level+".txt", levelLoaded);
}

function levelLoaded(levelGuide)
{
    // Remove all whitespace from the loaded text
    levelGuide = levelGuide.replace(/\s+/g, ''); 
    
    // Populate the game board using the text file's contents
    initializeLevel(levelGuide);

    // Display the Instructions
    document.querySelector('#instructions').style.display = "block";
	
    // Start updating the game board
	paused = false;
	update();
}

function update(){
	// Schedule a call to update() in 1/60th of a second
	if(paused) return;
	requestAnimationFrame(update);
	
    // Clear the background
    ctx.save();
    ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,screenWidth,screenHeight);
    ctx.restore();

    // Draw a square around the game board
    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(topSpacing, leftSpacing, rows * rowWidth, cols * colWidth);
    ctx.restore();

    // Loop through the game board sections and draw them
    for (let i = 0; i < rows; i++)
    {
        for (let j = 0; j < cols; j++)
        {
            // If the game board tile exists draw it
            if(gameBoard[i][j].sprite != null)
            {
                gameBoard[i][j].sprite.draw(ctx);
            }
        }
    }

    // Loop through the dots and end points and draw them
	endPoints.forEach(function(endPoint) {
        endPoint.sprite.draw(ctx);
    });
	
	teleporters.forEach(function(tel) {
        tel.sprite.draw(ctx);
    });
	
    dots.forEach(function(dot) {
        dot.sprite.draw(ctx);
    });

	
    // Write the turns left onto the screen
	ctx.font = "bold 30px Roboto";
    ctx.fillText("Turns left: " + turns, 615, 50, 185);
}

function initializeLevel(levelGuide)
{
    // Populate the game board using the level guide string
    let location = 0;
    for (let j = 0; j < cols; j++)
    {
        for (let i = 0; i < rows; i++)
        {
            if (levelGuide.charAt(location) == 0) // Empty Space 
            {
                // No piece to add to the game board
                //gameBoard[j][i] = createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Gray", colWidth, rowWidth);
				gameBoard[j][i] = {sprite:null, filled:0}
            }
            else if (levelGuide.charAt(location) == 1) // Empty Tile 
            {
                gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 1};
            }
            else if (levelGuide.charAt(location) == 2) // Tile with ball
            {
                gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 2};
                dots.push({sprite:createCircleSprite(i, j, "Green", colWidth / 2.5), x: i, y: j, normal: true});
            }
            else if (levelGuide.charAt(location) == 3) // Tile with end goal
            {
                gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 3};
                endPoints.push({sprite:createCircleSprite(i, j, "Purple", colWidth / 2.5), x: i, y: j});
            }
			else if (levelGuide.charAt(location) == "R") // Tile with reverse ball
            {
                gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 2};
                dots.push({sprite:createCircleSprite(i, j, "Red", colWidth / 2.5), x: i, y: j, normal: false});
            }else if(levelGuide.charAt(location) == "T" ) //Tile with teleporter
			{
				gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 1};
				teleporters.push({sprite: createImageSprite((i * colWidth) + leftSpacing +5, (j * rowWidth) + topSpacing +5, 65, 65, "images/portal.png"),x:i, y:j}); // Image obtained and edited from https://www.deviantart.com/texelgirl-stock/art/Portal-1-83764812
			}
            location++;
        }
    }
	let turnNum = "";
	//Read the turn number from the level file
	//Read each character until no character is found
	while(levelGuide.charAt(location)!= ""){
		turnNum += "" + levelGuide.charAt(location) + "";
		location++;
	}
	turns = parseInt(turnNum,10);
}

// Array initialization code SOURCED from https://stackoverflow.com/a/966938
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

// Text file reading code MODIFIED from https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99
function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.timeout = 2000;
    rawFile.responseType = 'text';
    rawFile.onreadystatechange = function(e) {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                callback(rawFile.responseText)
            } 
        }
    }
    rawFile.ontimeout = function () {
        console.log('Timeout on loading text file: ' + file)
    }
    rawFile.open('GET', file, true)
    rawFile.send();
}

function keyPressed(event) {
	let move = 0;
	if(paused) return;
	//Left
	if(event.keyCode == 37) {
		dots.sort((a,b) => a.x - b.x);
        for(let dot of dots){
			//Standard dot movement
			if(dot.normal && dot.x - 1 >=0 && gameBoard[dot.y][dot.x-1].filled != 0 && gameBoard[dot.y][dot.x-1].filled != 2){
				gameBoard[dot.y][dot.x-1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(-1,0);
				dot.x--;
				move++;
			//Reverse dot movement
			}else if( !dot.normal && dot.x + 1 < 8 && gameBoard[dot.y][dot.x+1].filled != 0 && gameBoard[dot.y][dot.x+1].filled != 2){
				gameBoard[dot.y][dot.x+1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(1,0);
				dot.x++;
				move++;
			}
		}
	//Up		
    }else if(event.keyCode == 38) {
		dots.sort((a,b) => a.y - b.y);
    	for(let dot of dots){
			if(dot.normal && dot.y - 1 >=0 && gameBoard[dot.y-1][dot.x].filled != 0 && gameBoard[dot.y-1][dot.x].filled != 2){
				gameBoard[dot.y-1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,-1);
				dot.y--;
				move++;
			}else if(!dot.normal && dot.y + 1 < 8&& gameBoard[dot.y+1][dot.x].filled != 0&& gameBoard[dot.y+1][dot.x].filled != 2){
				gameBoard[dot.y+1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,1);
				dot.y++;
				move++;
			}
		}
	//Right
    }else if(event.keyCode == 39) {
		dots.sort((a,b) => b.x - a.x);
        for(let dot of dots){
			if(dot.normal && dot.x + 1 < 8 && gameBoard[dot.y][dot.x+1].filled != 0 && gameBoard[dot.y][dot.x+1].filled != 2){
				gameBoard[dot.y][dot.x+1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(1,0);
				dot.x++;
				move++;
			}else if(!dot.normal && dot.x - 1 >=0 && gameBoard[dot.y][dot.x-1].filled != 0 && gameBoard[dot.y][dot.x-1].filled != 2){
				gameBoard[dot.y][dot.x-1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(-1,0);
				dot.x--;
				move++;
			}
		}
	//Down	
    }else if(event.keyCode == 40) {
		dots.sort((a,b) => b.y - a.y);
    	for(let dot of dots){
			if(dot.normal && dot.y + 1 < 8&& gameBoard[dot.y+1][dot.x].filled != 0&& gameBoard[dot.y+1][dot.x].filled != 2){
				gameBoard[dot.y+1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,1);
				dot.y++;
				move++;
			}else if(!dot.normal && dot.y - 1 >=0 && gameBoard[dot.y-1][dot.x].filled != 0 && gameBoard[dot.y-1][dot.x].filled != 2){
				gameBoard[dot.y-1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,-1);
				dot.y--;
				move++;
			}
		}	
    }
    
    // If the player moved this turn
	if(move > 0){
        // Play the move music
        moveSound.play();

        // Decrement the turn tracker
        turns--;
        
        // Reset the move counter
		move = 0;
		
		//Check if teleporters exist in the current level
		if(teleporters.length > 0){
			teleport();
		}
				
    }
    
    // Check win/loss conditions
	checkWin();
	if(turns <= 0 && !paused){
		paused = true;
		displayLoss();
	}
	
}

function checkWin(){
	let length = 0;
	for(let dot of dots){
		for(let end of endPoints){
			if(dot.x == end.x && dot.y == end.y){
				length++;
			}
		}
	}

	if(length == endPoints.length){
		displayWin();
		paused = true;
	}
}

function displayWin(){
    // Advance the level
    level++;
    if(level > 10){
		level = 10;
	}
	localStorage.setItem("shift-level", level);
    // Play the win music
    winSound.play();
    
    // Hide the Instructions
    document.querySelector('#instructions').style.display = "none";
    
    // Display the win screen
	document.querySelector("#nextButton").onclick = restartGame;
	document.querySelector('#winScreen').style.display = "block";
}

function displayLoss(){
    // Play the lose music
    loseSound.play();

	// Hide the Instructions
    document.querySelector('#instructions').style.display = "none";

    // Display the loss screen
	document.querySelector("#retryButton").onclick = restartGame;
	document.querySelector('#lossScreen').style.display = "block";
}
function teleport(){
	//Go through each dot and check if it is on either teleporter spot
	for(let dot of dots){
		//If a dot is on a teleporter swap it to the other teleporter's location
		if(dot.x == teleporters[0].x && dot.y == teleporters[0].y)
		{
			gameBoard[teleporters[1].y][teleporters[1].x].filled = 2;
			gameBoard[dot.y][dot.x].filled = 1;
			dot.x = teleporters[1].x;
			dot.y = teleporters[1].y;
			dot.sprite.place(teleporters[1].x, teleporters[1].y);
		}
		else if(dot.x == teleporters[1].x && dot.y == teleporters[1].y)
		{
			gameBoard[teleporters[0].y][teleporters[0].x].filled = 2;
			gameBoard[dot.y][dot.x].filled = 1;
			dot.x = teleporters[0].x;
			dot.y = teleporters[0].y;
			dot.sprite.place(teleporters[0].x, teleporters[0].y);
		}
	}
}
  