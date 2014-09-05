var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var canvas;
var context;
var lineScore;
var currentBlock;
var isGameOver;
var previousTime;
var currentTime;


$(document).ready(function(){

	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	lineScore = $('#lines');
	previousTime = 0;
	currentTime = 0;
	startGame();
	// drawBoard();
	// block = getRandomBlock()
	// drawBlock(block);
})


function startGame() {	
	var row, col;
	currentLines = 0;
	isGameOver = false;

	gameData = new Array();

		for(row= 0; row < ROWS; row++) {
			gameData[row] = new Array();
			for(col = 0; col < COLS; col++) {
				// gameData[r].push(0);
				gameData[row][col] = 0;
			}
		}

	currentBlock = getRandomBlock();
	var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	window.requestAnimationFrame = requestAnimFrame;
	
	requestAnimationFrame(updateGame);
}


function drawBoard() {
	// context.drawImage(bgImg, 0, 0, 320, 640, 0, 0, 320, 640);
	context.rect(0, 0, 320, 640);
	context.fillStyle="blue";
	context.fill();
	context.lineWidth = "2";
	context.strokeStyle = "yellow";
	context.stroke();
	
	for(var row = 0; row < ROWS; row++) {
		for(var col = 0; col < COLS; col++) {
			if(gameData[row][col] != 0) {
				// context.drawImage(blockImg, (gameData[row][col] - 1) * SIZE, 0, SIZE, SIZE, col * SIZE, row * SIZE, SIZE, SIZE); -->
				context.rect(col * SIZE, row * SIZE, SIZE, SIZE);
				context.fillStyle="red";
				context.fill();
			}
		}
	}
}

function drawBlock(block) {
	var drawX = block.gridX;
	var drawY = block.gridY;
	var rotation = block.currentRotation;

// drawY = 10;

	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] == 1 && drawY >= 0) {
				// context.drawImage(blockImg, block.color * SIZE, 0, SIZE, SIZE, drawX * SIZE, drawY * SIZE, SIZE, SIZE);
				// context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
				context.beginPath();
				context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
				context.fillStyle="green";
				context.fill();

			}
			
			drawX += 1;
		}
		
		drawX = block.gridX;
		drawY += 1;
	}

}

function getKeyCode(e) {
	// if(!e) { var e = window.event; }

	e.preventDefault();

	if(isGameOver != true) {
		switch(e.keyCode) {
			case 37: {
				if( validateMove(currentBlock.gridX - 1, currentBlock.gridY, currentBlock.currentRotation) )
					currentBlock.gridX--;
			}
			break;

			case 39: {
				if( validateMove(currentBlock.gridX + 1, currentBlock.gridY, currentBlock.currentRotation) )
					currentBlock.gridX++;
			}
			break;

			case 38: {
				var newRotation = currentBlock.currentRotation - 1;
				if(newRotation < 0)
					newRotation = currentBlock.rotations.length - 1;

				if( validateMove(currentBlock.gridX, currentBlock.gridY, newRotation) )
					currentBlock.currentRotation = newRotation;
			}
			break;

			case 40: {
				if( validateMove(currentBlock.gridX, currentBlock.gridY + 1, currentBlock.currentRotation) )
					currentBlock.gridY++;
			}
			break;
		}
	}
	else {
		startGame();
	}
}

function validateMove(xpos, ypos, newRotation)
{
	var result = true;
	var newx = xpos;
	var newy = ypos;
	
	for(var row = 0, length1 = currentBlock.rotations[newRotation].length; row < length1; row++) {
		for(var col = 0, length2 = currentBlock.rotations[newRotation][row].length; col < length2; col++) {
			if(newx < 0 || newx >= COLS) {
				result = false;
				col = length2;
				row = length1;
			}
			
			if(gameData[newy] != undefined && gameData[newy][newx] != 0
				&& currentBlock.rotations[newRotation][row] != undefined && currentBlock.rotations[newRotation][row][col] != 0) {
				result = false;
				col = length2;
				row = length1;
			}
			
			newx += 1;
		}
		
		newx = xpos;
		newy += 1;
		
		if(newy > ROWS) {
			row = length1;
			result = false;
		}
	}
	
	return result;
}

function updateGame() {
  currentTime = new Date().getTime();

  if (currentTime - previousTime > 500) {
    // drop currentBlock every half-second
    if (validateMove(currentBlock.gridX, currentBlock.gridY + 1, currentBlock.currentRotation)) {
      currentBlock.gridY += 1;
    } 
    else {
      landBlock(currentBlock);
      currentBlock = getRandomBlock();
    }

    // update time
    previousTime = currentTime;
  }

  context.clearRect(0, 0, 320, 640);
  drawBoard();
  drawBlock(currentBlock);

  if (isGameOver == false) {
    requestAnimationFrame(updateGame);
  } 
  else {
    context.fillText("GAME OVER");
    context.fillStyle = "white";
	}
}

function checkForCompleteLines() {
	var lineFound = false;
	var fullRow = true;
	var row = ROWS - 1;
	var col = COLS - 1;
	
	while(row >= 0)
	{
		while(col >= 0)
		{
			if(gameData[row][col] == 0)
			{
				fullRow = false;
				col = -1;
			}
			col--;
		}
		
		if(fullRow == true)
		{
			zeroRow(row);
			row++;
			lineFound = true;
			currentLines++;
		}
		
		fullRow = true;
		col = COLS - 1;
		row--;
	}
	
	if(lineFound)
	{
		lineSpan.innerHTML = currentLines.toString();
	}
}


