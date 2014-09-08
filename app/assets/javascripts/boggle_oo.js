board1 = [
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'A', 'K', 'L'],
  ['M', 'N', 'O', 'P']
]

board2 = [
  ['B', 'E', 'A', 'B', 'T'],
  ['E', 'E', 'E', 'H', 'E'],
  ['A', 'A', 'A', 'L', 'S'],
  ['X', 'N', 'O', 'X', 'T'],
  ['X', 'N', 'O', 'X', 'T']
]

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function Coord(x, y, board){
  this.x = x;
  this.y = y;
  this.letter = board[x][y];

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
            ]
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

// function removeFromArray(element, array) {
//   var index = array.indexOf(element);
//   if (index > -1) {
//     array.splice(index, 1);
//     return array;
//   }
// }

// function addArrayElement(element, array, index) {
//   array.splice(index, 0, element);
//   return array;
// }

function WordFinder(word, board) {
  this.word = word;
  this.currentCharIndex = 0;
  this.validStemsOfWords = [];

  this.firstLetterCoords = function() {
    for (var r=0; r<board.length; r++) {
      for (var c=0; c<board[0].length; c++) {
        if (board[r][c] === word[0]) {
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
    console.log("line 95");
    console.log(this.validStemsOfWords.length);
    var indexOfCharNeeded = this.validStemsOfWords[0].length;
    var charNeeded = this.word[indexOfCharNeeded];
    var newStemsCreated = []; // we will push this to this.validStems at the very end of the function

    var numStems = this.validStemsOfWords.length;
    console.log("VALID STEMS OF WORDS");
    console.log("*********************" + i);
    for (var i=0; i<numStems; i++) {
      console.log(this.validStemsOfWords[i]);
    }
    console.log("*********************");
    console.log("SEEKING LETTER: " + charNeeded);
    console.log("*********************");

    for (var stemI=0; stemI<this.validStemsOfWords.length; stemI++) {  // for each candidate
      // var currentOriginalStem=this.validStemsOfWords[stemI];
      var lastCharObj = this.validStemsOfWords[stemI][indexOfCharNeeded-1];
      var neighbors = lastCharObj.neighbors();
      // console.log("stemI: " + stemI);
      // console.log("lastCharObj.neighbors()");
      // console.log("Stem: " + this.validStemsOfWords);
      var numNeighbors = neighbors.length; // how many neighbors are there?
      var matchesInNeighbors = [];
      console.log("Last Character: " + lastCharObj.letter + "(" + lastCharObj.x + ", " + lastCharObj.y + ")");
      console.log("neighbors of the last character object are below!");
      // for (var n=0; n<numNeighbors; n++) {
      //   console.log(boggle)
      // }
      console.log(lastCharObj.neighbors());

      for (var nI=0; nI<numNeighbors; nI++) {  // go thru each neighbor
        var x = neighbors[nI][0];
        var y = neighbors[nI][1];
        if (board[x][y] === charNeeded) { // save potential matches--what we do depends on how many there are, so let's store them in an array
          console.log("*************************");
          console.log("Neighbor: " + nI + ":  " + board[x][y] + " (" + x + ", " + y + ")");
          var c = new Coord(x,y,board);
          matchesInNeighbors.push(c);
        }
      }

      console.log("#Matches In Neighbors:" + matchesInNeighbors.length);

      // WHAT WE DO DEPENDS ON HOW MANY MATCHES
      if (matchesInNeighbors.length === 0) { // if no matches, delete the current stem
        // this.validStemsOfWords.splice(stemI, 1);
        console.log("There were no matches.");
      }

      else if (matchesInNeighbors.length === 1) { // if only one match, extend the current stem with the match
        var match = matchesInNeighbors[0];
        console.log("There was only ONE match.");
        this.validStemsOfWords[stemI].push(match);
      }

      else if (matchesInNeighbors.length >= 1) { // if multiple matches, extend the current stem with the first one, duplicate stems for the remaining, and add matches onto those
       for (var m=0; m<matchesInNeighbors.length; m++) {
        var currentOriginalStem=clone(this.validStemsOfWords[stemI]);
        console.log("There WERE a few matches.");
        currentOriginalStem.push(matchesInNeighbors[m]);
        newStemsCreated.push(currentOriginalStem);
       }
      }
    } // end of stemI loop
    // add each newly created stem (from multiple neighbor candidates) to the valid stems
    for (var i=0; i<newStemsCreated.length; i++) {
      this.validStemsOfWords.push(newStemsCreated[i]);
    }
    for (var i=this.validStemsOfWords.length-1; i>=0; i--) {
      if (this.validStemsOfWords[i].length != (indexOfCharNeeded+1)) {
        this.validStemsOfWords.splice(i, 1);
        // var marker = ["this", "is", "not", "a", "valid", "stem!"];
        // this.validStemsOfWords[i].push(marker);
      }
    }
  } // end followStemsOneMoreLetter() function

  // this.findWords = function() {
  //   //break if no more stems
  //   if (this.validStemsOfWords.length === 0) {
  //     return false; // or return empty array?
  //   }

  //   // stop and return if you've done all the letters of the word
  //   if (this.validStemsOfWords[0].length = this.word.length) {
  //     return this.validStemsOfWords;
  //   }

  //   // for each letter after the first one
  //   for (var charIndex=1; charIndex<this.word.length; charIndex++) {
  //     // for each running Word Stem candidate
  //     for (var cand=0; cand<this.validStemsOfWords.length; cand++) {
  //       //check its neighbors
  //       validNeighbors = [];
  //       if (this.board[validStemsOfWords[cand][charIndex].neighbors[0]][validStemsOfWords[cand][charIndex].neighbors[1]] === this.word[charIndex] ) {
  //         validNeighbors.push
  //       }
  //     }
  //   } 0, 2 ], [ 0, 4 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ]
  // }

  // this.cleanup = function() {
  //   var max = this.validStemsOfWords.length;
  //   for (var i=0; i<max; i++) {

  //   }
  // }

  this.doYourMagic = function() {
    var numCharsToDo = this.word.length - 1;
    this.firstLetterCoords();
    for (var i=0; i<numCharsToDo; i++) {
      if (this.validStemsOfWords.length > 0) {
        this.followStemsOneMoreLetter();
      }
    }
      // this.cleanup();
  }
}



// w = new WordFinder("BTESTT", board2);
// w = new WordFinder("BTEST", board2);
// w = new WordFinder("BEAN", board2);
w = new WordFinder("BHLXX", board2);
w.doYourMagic();

console.log(w.validStemsOfWords);
console.log(w.validStemsOfWords.length);

b = new Coord(0, 3, board2);
// console.log(b.neighbors());
