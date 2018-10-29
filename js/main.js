import {createCircleSprite,createSquareSprite,createImageSprite} from './classes.js';
export {init};

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

// Calculate the top and left spacing to have the game board centered in the bottom middle of the canvas
const topSpacing = screenHeight - (rows * rowWidth);
const leftSpacing = screenWidth - ((cols * colWidth) * 1.5);

function init(){
    document.querySelector("#startButton").onclick = startGame;
}

function startGame(){
    // Hide the Main Menu
    document.querySelector('#mainMenu').style.display = "none";

    // Initialize empty 2D array of the specified size
    gameBoard = createArray(rows, cols);

    // Start loading the level from an external file and call the levelLoaded function when complete
    readTextFile("levels/level-1.txt", levelLoaded);
}

function levelLoaded(levelGuide)
{
    // Remove all whitespace from the loaded text
    levelGuide = levelGuide.replace(/\s+/g, ''); 
    
    // Populate the game board using the text file's contents
    initializeLevel(levelGuide)

    // Start updating the game board
	update();
}

function update(){
	// Schedule a call to update() in 1/60th of a second
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
            if(gameBoard[i][j] != null)
            {
                gameBoard[i][j].draw(ctx);
            }
        }
    }

    // Loop through the dots and end points and draw them
    dots.forEach(function(dot) {
        dot.draw(ctx);
    });
    endPoints.forEach(function(endPoint) {
        endPoint.draw(ctx);
    });
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
            }
            else if (levelGuide.charAt(location) == 1) // Empty Tile 
            {
                gameBoard[j][i] = createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth);
            }
            else if (levelGuide.charAt(location) == 2) // Tile with ball
            {
                gameBoard[j][i] = createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth);
                dots.push(createCircleSprite((i * colWidth) + leftSpacing + (colWidth / 2), (j * rowWidth) + topSpacing + (rowWidth / 2), "Green", colWidth / 2.5));
            }
            else if (levelGuide.charAt(location) == 3) // Tile with end goal
            {
                gameBoard[j][i] = createSquareSprite((i * colWidth) + leftSpacing, (j * rowWidth) + topSpacing, "Black", colWidth, rowWidth);
                dots.push(createCircleSprite((i * colWidth) + leftSpacing + (colWidth / 2), (j * rowWidth) + topSpacing + (rowWidth / 2), "Purple", colWidth / 2.5));
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