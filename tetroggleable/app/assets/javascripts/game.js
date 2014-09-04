var ROWS = 20;
var COLS = 10;
var SIZE = 32;

var canvas;
var context;
var lineScore;
var currentPiece;


$(document).ready(function(){


	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	lineScore = $('#lines');
	
	function initGame()
{	
	
	var r, c;
	currentLines = 0;
	isGameOver = false;
	
	gameData = new Array();
		
		for(r = 0; r < ROWS; r++)
		{
			gameData[r] = new Array();
			for(c = 0; c < COLS; c++)
			{
				// gameData[r].push(0);
				gameData[r][c] = 0;
			}
		}	

	currentPiece = getRandomPiece();
	

	
	var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
							
	window.requestAnimationFrame = requestAnimFrame;
	
	requestAnimationFrame(update);
	}
})

