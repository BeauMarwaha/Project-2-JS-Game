import {createCircleSprite,createSquareSprite,createImageSprite} from './classes.js';
export {init,rowWidth,colWidth,topSpacing,leftSpacing};

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const screenWidth = canvas.width;
const screenHeight = canvas.height;
let gameBoard;
const rows = 8;
const rowWidth = 50;
const cols = 8;
const colWidth = 50;
let dots = [];
let endPoints = [];

let turns = 8;
let level = 1;
let paused = true;
// Calculate the top and left spacing to have the game board centered in the bottom middle of the canvas
const topSpacing = screenHeight - (rows * rowWidth);
const leftSpacing = screenWidth - ((cols * colWidth) * 1.5);

function init(){
    document.querySelector("#startButton").onclick = startGame;
	
	document.addEventListener('keyup', keyPressed, false);
}

function startGame(){
    // Hide the Main Menu
    document.querySelector('#mainMenu').style.display = "none";

    // Initialize empty 2D array of the specified size
    gameBoard = createArray(rows, cols);

    // Start loading the level from an external file and call the levelLoaded function when complete
    readTextFile("levels/level-1.txt", levelLoaded);
}
function restartGame(){
	document.querySelector('#lossScreen').style.display = "none";
	
	gameBoard = createArray(rows, cols);
	dots = [];
	endPoints = [];
	readTextFile("levels/level-"+level+".txt", levelLoaded);
	
	turns = 8;

	//debugger;
    
}
function levelLoaded(levelGuide)
{
    // Remove all whitespace from the loaded text
    levelGuide = levelGuide.replace(/\s+/g, ''); 
    
    // Populate the game board using the text file's contents
    initializeLevel(levelGuide)

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
	ctx.fillRect(0,0,screenWidth,screenHeight)
    ctx.restore();

    // Draw a square around the game board
    ctx.save();
    ctx.strokeStyle = "#000000";
	ctx.strokeRect(topSpacing, leftSpacing, rows * rowWidth, cols * colWidth)
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
	
    dots.forEach(function(dot) {
        dot.sprite.draw(ctx);
    });
	ctx.font = "30px Arial";
    ctx.fillText("Turns left: " + turns,leftSpacing,topSpacing - 50);
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
                dots.push({sprite:createCircleSprite(i, j, "Green", colWidth / 2.5), x: i, y: j});
            }
            else if (levelGuide.charAt(location) == 3) // Tile with end goal
            {
                gameBoard[j][i] = {sprite:createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth), filled: 3};
                endPoints.push({sprite:createCircleSprite(i, j, "Purple", colWidth / 2.5), x: i, y: j});
            }
            location++;
        }
    }
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
	if(event.keyCode == 37) {
		dots.sort((a,b) => a.x - b.x);
        for(let dot of dots){
			if(dot.x - 1 >=0 && gameBoard[dot.y][dot.x-1].filled != 0 && gameBoard[dot.y][dot.x-1].filled != 2){
				gameBoard[dot.y][dot.x-1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(-1,0);
				dot.x--;
				move++;
			}
		}	
    }else if(event.keyCode == 38) {
		dots.sort((a,b) => a.y - b.y);
    	for(let dot of dots){
			if(dot.y - 1 >=0 && gameBoard[dot.y-1][dot.x].filled != 0 && gameBoard[dot.y-1][dot.x].filled != 2){
				gameBoard[dot.y-1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,-1);
				dot.y--;
				move++;
			}
		}	
    }else if(event.keyCode == 39) {
		dots.sort((a,b) => b.x - a.x);
        for(let dot of dots){
			if(dot.x + 1 < 8 && gameBoard[dot.y][dot.x+1].filled != 0 && gameBoard[dot.y][dot.x+1].filled != 2){
				gameBoard[dot.y][dot.x+1].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(1,0);
				dot.x++;
				move++;
			}
		}		
    }else if(event.keyCode == 40) {
		dots.sort((a,b) => b.y - a.y);
    	for(let dot of dots){
			if(dot.y + 1 < 8&& gameBoard[dot.y+1][dot.x].filled != 0&& gameBoard[dot.y+1][dot.x].filled != 2){
				gameBoard[dot.y+1][dot.x].filled = 2;
				gameBoard[dot.y][dot.x].filled = 1;
				dot.sprite.move(0,1);
				dot.y++;
				move++;
			}
		}	
    }
	
	if(move > 0){
		turns--;
		move = 0;		
	}
	if(turns <= 0){
		paused = true;
		displayLoss();
		
	}
	checkWin();
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
	document.querySelector('#winScreen').style.display = "block";
	
}
function displayLoss(){
	
	document.querySelector("#retryButton").onclick = restartGame;
	document.querySelector('#lossScreen').style.display = "block";
}
  