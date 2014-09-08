// UTILITY FUNCTIONS

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

// function arrayUnique(a) {
//     return a.reduce(function(p, c) {
//         if (p.indexOf(c) < 0) p.push(c);
//         return p;
//     }, []);
// };


// BOGGLE FUNCTIONS

function Coord(x, y, board){
  this.x = x;
  this.y = y;
  this.letter = board[x][y].letter;

  this.neighbors = function() {
    x_coord = this.x;
    y_coord = this.y;

    var neighbors = [
                      [- 1, -1],
                      [-1, 0],
                      [-1, +1],
                      [0, -1],
                      [0, +1],
                      [+1, -1],
                      [+1, 0],
                      [+1, +1]
                    ];
    neighborArray = [];

    for(var r = 0; r < neighbors.length; r++){
      row = neighbors[r];
      if ( x_coord + row[0] >= 0 &&
           x_coord + row[0] < board.length &&
           y_coord + row[1] >= 0 &&
           y_coord + row[1] < board.length ) {
        neighborArray.push([x_coord + row[0], y_coord + row[1]])
      }
    }
      return neighborArray;
  }

}

function WordFinder(word, board) {
  this.word = word;
  this.currentCharIndex = 0;
  this.validStemsOfWords = [];

  this.firstLetterCoords = function() {
    for (var r=0; r<board.length; r++) {
      for (var c=0; c<board[0].length; c++) {
        if (board[r][c].letter === word[0]) {
          this.validStemsOfWords.push([new Coord(r,c,board)]);
        }
      }
    }
    return this.validStemsOfWords;
  }

  // FOR EACH CURRENT STEM CANDIDATE,
  // GO THROUGH EACH OF ITS NEIGHBORS, SEE IF ONE OR MORE NEIGHBORS MATCHES NEXT LETTER,
  // IF ONE (AND ONLY ONE MATCHES), ADD ONTO IT
  // IF NONE MATCH, REMOVE THE ORIGINAL STEM FROM THE ARRAY
  // IF MULTIPLES MATCH, DUPLICATE THE ORIGINAL STEM AND THEN ADD ON TO THEM
  this.followStemsOneMoreLetter = function() {
    var indexOfCharNeeded = this.validStemsOfWords[0].length;
    var charNeeded = this.word[indexOfCharNeeded];
    var newStemsCreated = []; // we will push this to this.validStems at the very end of the function

    for (var stemI=0; stemI<this.validStemsOfWords.length; stemI++) {  // for each candidate
      var lastCharObj = this.validStemsOfWords[stemI][indexOfCharNeeded-1];
      var neighbors = lastCharObj.neighbors();
      var numNeighbors = neighbors.length; // how many neighbors are there?
      var matchesInNeighbors = [];

      for (var nI=0; nI<numNeighbors; nI++) {  // go thru each neighbor
        var x = neighbors[nI][0];
        var y = neighbors[nI][1];
        if (board[x][y] != 0 && board[x][y] != undefined && board[x][y].letter === charNeeded) { // save potential matches--what we do depends on how many there are, so let's store them in an array
          var c = new Coord(x,y,board);
          matchesInNeighbors.push(c);
        }
      }

      // WHAT WE DO DEPENDS ON HOW MANY MATCHES
      if (matchesInNeighbors.length === 1) { // if only one match, extend the current stem with the match
        var match = matchesInNeighbors[0];
        this.validStemsOfWords[stemI].push(match);
      }

      else if (matchesInNeighbors.length >= 1) { // if multiple matches, extend the current stem with the first one, duplicate stems for the remaining, and add matches onto those
       for (var m=0; m<matchesInNeighbors.length; m++) {
        var currentOriginalStem=clone(this.validStemsOfWords[stemI]);
        currentOriginalStem.push(matchesInNeighbors[m]);
        newStemsCreated.push(currentOriginalStem);
       }
      }
    }
    // add each newly created stem (from multiple neighbor candidates) to the valid stems
    for (var i=0; i<newStemsCreated.length; i++) {
      this.validStemsOfWords.push(newStemsCreated[i]);
    }
    for (var i=this.validStemsOfWords.length-1; i>=0; i--) {
      if (this.validStemsOfWords[i].length != (indexOfCharNeeded+1)) {
        this.validStemsOfWords.splice(i, 1);
      }
    }
  }

  this.returnAllWordCoords = function() {
    this.firstLetterCoords();
    for (var i=0, numCharsToDo = this.word.length - 1; i<numCharsToDo; i++) {
      if (this.validStemsOfWords.length > 0) {
        this.followStemsOneMoreLetter();
      }
    }
    return this.validStemsOfWords;
  }
}

function wordCoordsOnBoggleBoard(word, board) {
  w = new WordFinder(word.toUpperCase(), board);
  allCoordObjs = w.returnAllWordCoords();
  allCoordCoords = [];
  for (var i=0, len=allCoordObjs.length; i<len; i++) {
    var x=allCoordObjs[i].length;
    for (var j=0; j<x; j++) {
      var coordArray = [allCoordObjs[i][j].x, allCoordObjs[i][j].y];
      allCoordCoords.push(coordArray);
  }
  }
      return allCoordCoords;
}
