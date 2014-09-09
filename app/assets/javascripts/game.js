var ROWS = 20;
var COLS = 10;
var SIZE = 32;
var SPEEDS = [500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 25, 10, 5, 1];
var BOARDHEIGHT = 640;
var BOARDWIDTH = 320;

var txt;
var canvas;
var context;
var preview;
var prevctx;
var currentBlock;
var currentTime;
var isGameOver;
var lineScore;
var previousTime;
var currentLevel = 1;
var currentSpeed = SPEEDS[currentLevel-1];
var dicts;
var gameIsPaused = false;
var linePoints = 10;
var tileColor = "#E4C390"
var lX2 = "#95B8D3"
var lX3 = "#095E9F"
var wX2 = "#DD9ABD"
var wX3 = "#89223A"

function setRowsCols() {
	width = $(window).width();
	height = $(window).height();

	if (height < 1160) {
		ROWS = 17;
		BOARDHEIGHT = 544;
		$("#gameCanvas").attr("height", 544);
	}
}

$(window).load(function(){

	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	preview = document.getElementById('gamePreview');
	prevctx = preview.getContext('2d');
	lineScore = $('#lines');
	previousTime = 0;
	currentTime = 0;

	//shrink for smaller screen
	setRowsCols();

	startGame();
	$(document).keydown(function(event){
			k = event.keyCode
			if(k==32||k==37||k==38||k==39||k==40)
				getKeyCode(event);
			if(k==13)
				findWord();
			if(k==27)
				toggleGamePause();
			else
				$('boggle_letters').focus();
	})
	$('input:text:first').focus();

		// drawBoard();
		// block = getRandomBlock()
		// drawBlock(block);
		loadDictionary();
});

function startGame() {
	var row, col;
	currentLines = 0;
	isGameOver = false;
	currentLevel = 1;
	currentSpeed = SPEEDS[currentLevel - 1];
	$("#levels").text(1)

	gameData = new Array();

		for(row= 0; row < ROWS; row++) {
			gameData[row] = new Array();
			for(col = 0; col < COLS; col++) {
				// gameData[r].push(0);
				gameData[row][col] = 0;
			}
		}

	currentBlock = getRandomBlock();
	nextBlock = getRandomBlock();


	var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	window.requestAnimationFrame = requestAnimFrame;

	requestAnimationFrame(updateGame);
	drawPreview();
}

function drawTile(drawX, drawY) {
	context.strokeStyle = "#000";
  context.beginPath();
 	// context.fillStyle = "#3c0";
 	context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
 	context.fill();
 	context.stroke();
}

function tileColors(contextName, scrabbleExtras) {
	if (scrabbleExtras == "NA") {
	  contextName.fillStyle = tileColor;
 	};
 	if (scrabbleExtras == "WX2"){
 		contextName.fillStyle = wX2;
 	};
	if (scrabbleExtras == "WX3"){
 		contextName.fillStyle = wX3;

 	};
 	if (scrabbleExtras == "LX2"){
 		contextName.fillStyle = lX2;
 	};
 	if (scrabbleExtras == "LX3"){
		contextName.fillStyle = lX3;
 	};

 	contextName.fill();
	contextName.stroke();
}

function drawTileBackground(drawX, drawY, scrabbleExtras) {
	numberPosX = drawX * SIZE;
	numberPosY = drawY * SIZE;
	context.strokeStyle = "#000";
  context.beginPath();
	context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);

	tileColors(context, scrabbleExtras);
 	context.fillRect(numberPosX, numberPosY, SIZE, SIZE);
};

function drawLetter(drawX, drawY, letter) {
	letterPosX = drawX * SIZE + 7;
	letterPosY = drawY * SIZE + 27;

	context.fillStyle = "#000";
 	context.font = '20pt Arial';
	context.fillText(letter, letterPosX, letterPosY, 22);

}

function drawNumber(drawX, drawY, score) {
	numberPosX = drawX * SIZE + 2;
	numberPosY = drawY * SIZE + 10;

	context.fillStyle = "#000";
 	context.font = 'bolder 8pt Arial';
 	context.fillText(score, numberPosX, numberPosY, SIZE);
}


function drawBoard() {
	// context.drawImage(bgImg, 0, 0, 320, 640, 0, 0, 320, 640);
	context.beginPath();
	context.rect(0, 0, 320, 640);
	context.fillStyle="black";
	context.fill();

	for(var row = 0; row < ROWS; row++) {
		for(var col = 0; col < COLS; col++) {
			if(gameData[row][col] != 0) {
				tile = gameData[row][col]
				drawTileBackground(col, row, tile.scrabbleExtras);
				drawTile(col, row);
				drawLetter(col, row, tile.letter);
				drawNumber(col, row, tile.score);
			}
			// else {
			// 	letterPosX = col * SIZE + 7;
			// 	letterPosY = row * SIZE + 27;

			// 	context.fillStyle = "#fff";
			//  	context.font = '14pt Arial';
			//  	coord = row + "," + col;
			// 	context.fillText(coord, letterPosX, letterPosY, 22);
			// }
		}
	}
}

function drawBlock(block) {
	var drawX = block.gridX;
	var drawY = block.gridY;
	var rotation = block.currentRotation;

	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] != 0 && drawY >= 0) {
				tile = block.rotations[rotation][row][col]
				drawTileBackground(drawX, drawY, tile.scrabbleExtras);
				drawTile(drawX, drawY);
				drawLetter(drawX, drawY, tile.letter);
				drawNumber(drawX, drawY, tile.score);
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
			case 32: {
				letBlockFall();
			}
			break;

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

function letBlockFall() {
	for (var i=0; i<ROWS; i++) {
		if (validateMove(currentBlock.gridX, currentBlock.gridY + 1, currentBlock.currentRotation))
			currentBlock.gridY++;
	}
}

function validateMove(xpos, ypos, newRotation) {
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

  if (currentTime - previousTime > currentSpeed && !(gameIsPaused)) {
    // drop currentBlock every half-second
    if (validateMove(currentBlock.gridX, currentBlock.gridY + 1, currentBlock.currentRotation)) {
      currentBlock.gridY += 1;
    }
    else {
      landBlock(currentBlock);
      currentBlock = nextBlock;
      nextBlock = getRandomBlock();
      drawPreview();
    }

    // update time
    previousTime = currentTime;
  }

  context.clearRect(0, 0, BOARDWIDTH, BOARDHEIGHT);
  drawBoard();
  drawBlock(currentBlock);

  if (isGameOver == false) {
    requestAnimationFrame(updateGame);
  }
  else {
  	saveGame();
    $("#right-bar h3").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
  }
}

function checkForCompleteLines() {
	var lineFound = false;
	var fullRow = true;
	var row = ROWS - 1;
	var col = COLS - 1;

	while(row >= 0) {
		while(col >= 0) {
			if(gameData[row][col] == 0) {
				fullRow = false;
				col = -1;
			}
			col--;
		}

		if(fullRow == true) {
			console.log("fullRow == true, line 225");
			clearCompletedRow(row);

			row++;
			lineFound = true;
			currentLines++;
			advanceLevelIfNeeded();
		}
		fullRow = true;
		col = COLS - 1;
		row--;
	}
	if(lineFound) {
		$("#lines").text(currentLines.toString());
	}
}

function landBlock(block) {
	var xpos = block.gridX;
	var ypos = block.gridY;
	var rotation = block.currentRotation;

	for(var row = 0, len = block.rotations[rotation].length; row < len; row++) {
		for(var col = 0, len2 = block.rotations[rotation][row].length; col < len2; col++) {
			if(block.rotations[rotation][row][col] != 0 && ypos >= 0) {
				tile = block.rotations[rotation][row][col]
				gameData[ypos][xpos] = tile;
			}
			xpos += 1;
		}
		xpos = block.gridX;
		ypos += 1;
	}
	checkForCompleteLines();

	if(block.gridY < 0) {
		isGameOver = true;

	}
}

function clearTile(coords) {
	var row = coords[0];
	var col = coords[1];
	console.log('tile to remove coordinate');
	console.log(coords)

	for (var i = row; i > 0; i--) {
		gameData[i][col] = gameData[i-1][col];
	}
}

function clearTiles(array) {
	for(var i = 0; i < array.length; i++) {
		clearTile(array[i]);
	}
};

function makeTilesFall(tilesArray) {
	console.log("Here are the tile coords to fall sent back from boggle.js:");
	console.log(tilesArray);

	//Remove duplicate coordinates
	for(var i = 0; i < tilesArray.length; i++) {
    for(var j = i + 1; j < tilesArray.length; ) {
      if(tilesArray[i][0] == tilesArray[j][0] && tilesArray[i][1] == tilesArray[j][1])
          tilesArray.splice(j, 1);
      else
        j++;
    }
	}

	//sort coordinates
	CoordinateComparer = function(a, b) {
		return b[0] - a[0] ;
	}
	newTilesArray =  tilesArray.sort(CoordinateComparer).reverse();

	console.log('new tile array');
	console.log(newTilesArray);
	clearTiles(newTilesArray)
}

function clearCompletedRow(row) {
	var row = row;
	var col = 0;

	while(row >= 0) {
		while(col < COLS) {
			if(row > 0)
				gameData[row][col] = gameData[row-1][col];
			else
				gameData[row][col] = 0;


			col++;
		}
		col = 0;
		row --;
	}
	updateScores('line', linePoints)
}

function advanceLevelIfNeeded() {
	if (currentLines % 10 === 0 && currentLevel < SPEEDS.length){
		currentLevel += 1;
		currentSpeed = SPEEDS[currentLevel - 1];
		$("#levels").text(currentLevel.toString());
	};
}

function updateScores(type, points) {
	if (type === 'line') {
		var lines = parseInt($("#lines").text()) + 1;
		$("#lines").text(lines);
	}
	else if (type === 'word') {
		var scrabbleScore = parseInt($("#scrabble_score").text()) + points;
		$("#scrabble_score").text(scrabbleScore);
	}
	var totalScore = parseInt($("#overall_score").text()) + points;
	$("#overall_score").text(totalScore);
}

function calculateScrabbleScore(tiles) {
	var score = 0;
	var extraMultiplier = 1;

	for (var i = 0; i < tiles.length; i++) {
		tile = gameData[tiles[i][0]][tiles[i][1]];
		console.log(tile)
		//tileScore = tiles[i].score

		currentLetterPoints = tile.score;

		switch(tile.scrabbleExtras) {
			case "NA": extraMultiplier *= 1;		break;
			case "WX2": extraMultiplier *= 2;		break;
			case "WX3": extraMultiplier *= 3;		break;
			case "LX2": currentLetterPoints *=2;	break;
			case "LX3": currentLetterPoints *=3;	break;
		}

		score += currentLetterPoints;
		console.log("LETTER and POINTS")
		console.log(tile.letter + ":" + currentLetterPoints)
	}

	console.log("SCORE so far");
	console.log(score)
	score *= extraMultiplier;
	console.log("Final Score");
	console.log(score)

	if (tiles.length >= 7) {
		score *= 2;
	}

	return score;
}

function loadDictionary() {
  $.get( "/assets/dictionary.txt", function( text ) {
    dicts = text.split( "\n" );
  } );
}

function findWord() {
	var letters = $("#boggle_letters").val();
	$("#boggle_letters").val("");
	var currentLetters = letters.split( "" );
	var tilesOnBoard = [];
	if( currentLetters.length >= 3 ) {
		word = currentLetters.join("");
		if( dicts.indexOf(word.toUpperCase())  != -1 ) {
			tilesOnBoard = wordCoordsOnBoggleBoard(word, gameData);
		}
		// tilesOnBoard = isWordOnBoard(word.toUpperCase(), gameData);

		//if isWordOnBoard does not return false, update score and make tiles fall
		if (tilesOnBoard.length > 0) {
			wordScore = calculateScrabbleScore(tilesOnBoard)
			updateScores('word', wordScore)
			makeTilesFall(tilesOnBoard);
		}
		else {
			$('#wordNotFound').show().fadeOut(2000);
		}
	}
}

// function findWord() {
// 	letters = $("#boggle_letters").val();
// 	$("#boggle_letters").val("");
// 	var currentLetters = letters.split( "" );
// 	if( currentLetters.length >= 3 ) {
// 		word = currentLetters.join("");
// 		if( dicts.indexOf(word.toUpperCase())  != -1 ) {
// 			isWordOnBoard(word, gameData);
// 		}
// 		tilesOnBoard = isWordOnBoard(word.toUpperCase(), gameData);

// 		//if isWordOnBoard does not return false, update score and make tiles fall
// 		if (tilesOnBoard) {
// 			wordScore = calculateScrabbleScore(tilesOnBoard)
// 			updateScores('word', wordScore)
// 			makeTilesFall(tilesOnBoard);
// 		}
// 		else {
// 			console.log("word not found");
// 		}
// 	}
// }

function toggleGamePause() {
	gameIsPaused = !(gameIsPaused);
}

function saveGame(){
	var level = $("#levels").text();
	var scrabble_score = $("#scrabble_score").text();
	var lines = $("#lines").text();
	var score = $("#overall_score").text();
	$.ajaxSetup({
	headers: {
		'X-CSRF-Token':$('meta[name="csrf-token"]').attr("content")
		}
	});
	$.ajax({
		url: '/games',
		type: 'POST',
		dataType: 'json',
		data: {game: { score: score, scrabble_score: scrabble_score, level: level,  lines: lines,}}
	})
	.done(function(response) {
		console.log("success");
		console.log(response)
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

}
