function drawTile(drawX, drawY) {
  context.strokeStyle = tileTextColor;
    context.beginPath();
  context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);
  context.fill();
  context.stroke();
}

function tileColors(contextName, scrabbleExtras, highlight) {
  if (scrabbleExtras == "NA")
    contextName.fillStyle = tileColor;

  if (scrabbleExtras == "WX2")
    contextName.fillStyle = wX2;

  if (scrabbleExtras == "WX3")
    contextName.fillStyle = wX3;

  if (scrabbleExtras == "LX2")
    contextName.fillStyle = lX2;

  if (scrabbleExtras == "LX3")
    contextName.fillStyle = lX3;

  if (highlight)
    contextName.fillStyle = "#3C00FB";

  contextName.fill();
  contextName.stroke();
}

function drawTileBackground(drawX, drawY, scrabbleExtras, highlight) {
  numberPosX = drawX * SIZE;
  numberPosY = drawY * SIZE;

  context.strokeStyle = tileTextColor;
  context.beginPath();
  context.rect(drawX * SIZE, drawY * SIZE , SIZE, SIZE);

  tileColors(context, scrabbleExtras, highlight);
  context.fillRect(numberPosX, numberPosY, SIZE, SIZE);
};

function drawLetter(drawX, drawY, letter) {
  letterPosX = drawX * SIZE + 7;
  letterPosY = drawY * SIZE + 27;

  context.fillStyle = tileTextColor;
  context.font = '20pt Arial';
  context.fillText(letter, letterPosX, letterPosY, 22);
}

function drawNumber(drawX, drawY, score) {
  numberPosX = drawX * SIZE + 2;
  numberPosY = drawY * SIZE + 10;

  context.fillStyle = tileTextColor;
  context.font = 'bolder 8pt Arial';
  context.fillText(score, numberPosX, numberPosY, SIZE);
}

function drawBoard() {
  context.beginPath();
  context.rect(0, 0, 320, 640);
  context.fillStyle="black";
  context.fill();

  for(var row = 0; row < ROWS; row++) {
    for(var col = 0; col < COLS; col++) {
      if(gameData[row][col] != 0) {
        tile = gameData[row][col]
        drawTileBackground(col, row, tile.scrabbleExtras, tile.highlight);
        drawTile(col, row);
        drawLetter(col, row, tile.letter);
        drawNumber(col, row, tile.score);
      }
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
        drawTileBackground(drawX, drawY, tile.scrabbleExtras, tile.highlight);
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
