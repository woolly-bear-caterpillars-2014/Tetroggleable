var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var canvas;
var context;
var currentBlock;
var lineScore;
var currentBlock;

$(document).ready(function(){

	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	lineScore = $('#lines');
	// startGame();
	// drawBoard();
	// drawBlock(getRandomBlock());

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
	
	// requestAnimationFrame(update);
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
<<<<<<< HEAD
	}
}

function drawBlock(block) {
	var drawX = block.gridX;
	var drawY = block.gridY;
	var rotation = block.currentRotation;
	
	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] == 1 && drawY >= 0) {
				// context.drawImage(blockImg, block.color * SIZE, 0, SIZE, SIZE, drawX * SIZE, drawY * SIZE, SIZE, SIZE);
				context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
				context.fillStyle="green";
				context.fill();
			}
			
			drawX += 1;
		}
		
		drawX = block.gridx;
		drawY += 1;
	}
=======
	}
}

function drawBlock(block) {
	var drawX = block.gridX;
	var drawY = block.gridY;
	var rotation = block.currentRotation;
	
	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] == 1 && drawY >= 0) {
				// context.drawImage(blockImg, block.color * SIZE, 0, SIZE, SIZE, drawX * SIZE, drawY * SIZE, SIZE, SIZE);
				context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
				context.fillStyle="green";
				context.fill();
			}
			
			drawX += 1;
		}
		
		drawX = block.gridx;
		drawY += 1;
	}
>>>>>>> master

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

	function checkForCompleteLines()
{
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


