// board = [
// 	['A', 'B', 'C', 'D'],
// 	['E', 'F', 'G', 'H'],
// 	['I', 'J', 'K', 'L'],
// 	['M', 'N', 'O', 'P']
// ]

// word = 'FIZ'
// word2 = 'FIN'
// word3 = 'LOP'
// word4 = 'ABCD'
// word5 = 'AFCH'
// word6 = 'DJP'

board = [];

function isWordOnBoard(word, board) {
  wordArray = word.split("")
  board = board
  console.log(board);

  var firstLetterCoord = loop(board, wordArray[0]);
  var isValidWord = true;
  var validWordsCoords = [];
  console.log("first Letter Coord");
  console.log(firstLetterCoord);

  if(firstLetterCoord.length > 0) {
    for (var i=0; i < firstLetterCoord.length; i++) {
      // priorLetter = wordArray[0];
      console.log("First letter found! Coords are below");
      console.log(firstLetterCoord[i]);
      newCoordinates = firstLetterCoord[i];
      coordinateArray = [firstLetterCoord[i]]

      for (var i = 0; i < (wordArray.length - 1); i++) {

        neighborArray = getNeighbors(newCoordinates);
        newCoordinates = checkNeighbors(neighborArray, wordArray[i+1], board);
        coordinateArray.push(newCoordinates);

        // console.log('new coordinates return:');
        // console.log(newCoordinates);
        if (newCoordinates === false || newCoordinates === undefined) {
          invalidWord();
          isValidWord = false;
          break;
        }
      }
      console.log("is valid word?");
      console.log(isValidWord);
      console.log(coordinateArray)
      validWordsCoords.push(coordinateArray)
      break;
    }
    console.log("Valid Words Coordinates:");
    console.log(validWordsCoords);
    return coordinateArray;
  }
  else
    return false;

}

function loop(array, targetLetter){
  result = false;
  coordinateArray = [];
  console.log("Looking for " + targetLetter);
  for(var r = 0; r < array.length; r++){
    row = array[r];
    for(var c = 0; c < row.length; c++) {
      if(row[c].letter && row[c].letter == targetLetter) {
        result =  true;
        coordinates = [r, c];
        coordinateArray.push(coordinates);
      }
    }
  }
  return coordinateArray;
}

function getNeighbors(coordinates) {
	x_coord = coordinates[0];
	y_coord = coordinates[1];

	var neighbors = [
            [- 1, -1],
            [-1, 0],
            [-1, +1],
            [0, -1],
            [0, +1],
            [+1, -1],
            [+1, 0],
            [+1, +1]
            ]
  neighborArray = [];

	for(var r = 0; r < neighbors.length; r++){
	  row = neighbors[r];
	  neighborArray.push([x_coord + row[0], y_coord + row[1]])
	}

  console.log("Neighbors Array:  ");
  console.log(neighborArray);
  return neighborArray;
}

function checkNeighbors(neighbors, currentLetter, board) {
	lettersArray = [];
	letterCoords = [];

	for(var i = 0; i < neighbors.length; i++){
		if (neighbors[i][0] >= 0 && neighbors[i][1] >= 0) {
      console.log("neighbors stuff:  ");
      console.log(board[neighbors[i][0]][neighbors[i][1]]);
			if (board[neighbors[i][0]][neighbors[i][1]] != undefined && board[neighbors[i][0]][neighbors[i][1]].letter) {
				letter = board[neighbors[i][0]][neighbors[i][1]].letter;
				lettersArray.push(letter);

				if (letter == currentLetter) {
					letterCoords = [neighbors[i][0], neighbors[i][1]];
					// console.log('matching letter coordinates')
					// console.log(letterCoords);
					return letterCoords;
				}
			}
			// else
			// 	return false;
		}
	}
	// console.log(letterCoords)
}

function invalidWord() {
	console.log('Your word is not on the board!')
}

