var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var canvas;
var context;
var currentBlock;
var lineScore;

$(document).ready(function(){

	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	lineScore = $('#lines');

	function initGame() {

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

	requestAnimationFrame(update);
	}
});

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
		initGame();
	}
}

