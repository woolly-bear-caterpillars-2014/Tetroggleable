boggle = [
	['A', 'B', 'C', 'D'],
	['E', 'F', 'G', 'H'],
	['I', 'J', 'K', 'L'],
	['M', 'N', 'O', 'P']
]

word = 'FIZ'
word2 = 'FIN'
word3 = 'LOP'
word4 = 'ABCD'
word5 = 'AFCH'
word6 = 'DJP'

function loop(array, targetLetter){
  result = false;
  console.log("Looking for " + targetLetter);
  for(var r = 0; r < array.length; r++){
    row = array[r];
    for(var c = 0; c < row.length; c++) {
      if(row[c] == targetLetter) {
        result =  true;
        coordinates = [r, c];
        return coordinates;
      } 
    }
  }
  return result;
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

	return neighborArray;
}

function checkNeighbors(neighbors, currentLetter) {
	lettersArray = [];
	letterCoords = [];

	for(var i = 0; i < neighbors.length; i++){
		if (neighbors[i][0] >= 0 && neighbors[i][1] >= 0) {
			if (boggle[neighbors[i][0]][neighbors[i][1]]) {
				letter = boggle[neighbors[i][0]][neighbors[i][1]];
				lettersArray.push(letter);

				if (letter == currentLetter) {
					letterCoords = [neighbors[i][0], neighbors[i][1]];
					// console.log('matching letter coordinates')
					// console.log(letterCoords);
					return letterCoords;
				}
			}	
			else 
				return false;
		}			
	}
	// console.log(letterCoords)
}

function invalidWord() {
	console.log('Your word is not on the board!')
}

function isWordOnBoard(word) {
	wordArray = word.split("")

	var firstLetterCoord = loop(boggle, wordArray[0]);

	if(firstLetterCoord) {
		priorLetter = wordArray[0];
		newCoordinates = firstLetterCoord;
		isValidWord = true;
		coordinateArray = [firstLetterCoord]

		for (var i = 0; i < (wordArray.length - 1); i++) {

			neighborArray = getNeighbors(newCoordinates);
			newCoordinates = checkNeighbors(neighborArray, wordArray[i+1]);
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
	}
	else 
		invalidWord();

}

