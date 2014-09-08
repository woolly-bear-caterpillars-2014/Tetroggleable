LETTERS = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

POINTS = {"A":1, "B":3, "C":3, "D":2, "E":1, "F":4, "G":2, "H":4, "I":1, "J":8, "K":5, "L":1, "M":3, "N":1, "O":1, "P":3, "Q":10, "R":1, "S":1, "T":1, "U":1, "V":4, "W":4, "X":8, "Y":4, "Z":0};

SCRABBLE = ["NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA","WX2", "WX3", "NA", "LX3", "NA", "LX2"]

function LBlock(t) {

  this.rotation1 =
        [ [t[3], 0],
          [t[2], 0],
          [t[1], t[0]] ];

  this.rotation2 =
        [ [0, 0, t[0]],
          [t[3], t[2], t[1]] ];

  this.rotation3 =
        [ [t[0], t[1]],
          [0, t[2]],
          [0, t[3]] ];

  this.rotation4 =
        [ [t[1], t[2], t[3]],
          [t[0], 0, 0] ];

  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function JBlock(t) {

  this.rotation1 =
        [ [0, t[0]],
          [0, t[3]],
          [t[1], t[2]] ];

  this.rotation2 =
        [ [t[0], t[3], t[2]],
          [0, 0, t[1]] ];

  this.rotation3 =
        [ [t[2], t[1]],
          [t[3], 0],
          [t[0], 0] ];

  this.rotation4 =
        [ [t[1], 0, 0],
          [t[2], t[3], t[0]] ];


  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function OBlock(t) {

  this.rotation1 =
        [ [t[0], t[1]],
          [t[3], t[2]] ];

  this.rotation2 =
        [ [t[3], t[0]],
          [t[2], t[1]] ];

  this.rotation3 =
        [ [t[2], t[3]],
          [t[1], t[0]] ];

  this.rotation4 =
        [ [t[1], t[2]],
          [t[0], t[3]] ];


  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function IBlock(t) {

  this.rotation1 =
        [ [t[0]],
          [t[1]],
          [t[2]],
          [t[3]] ];


  this.rotation2 = [ [t[0],t[1],t[2],t[3]] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 5;
  this.gridY = -4;
}

function TBlock(t) {

  this.rotation1 =
        [ [t[3], t[2], t[1]],
          [0, t[0], 0] ];

  this.rotation2 =
        [ [t[1], 0],
          [t[2], t[0]],
          [t[3], 0] ];

  this.rotation3 =
        [ [0, t[0], 0],
          [t[1], t[2], t[3]] ];

  this.rotation4 =
        [ [0, t[3]],
          [t[0], t[2]],
          [0, t[1]] ];

  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function ZBlock(t) {

  this.rotation1 =
        [ [t[3], t[1], 0],
          [0, t[2], t[0]] ];

  this.rotation2 =
        [ [0, t[0]],
          [t[1], t[2]],
          [t[3], 0] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function SBlock(t) {

  this.rotation1 =
        [ [0, t[2], t[0]],
          [t[3], t[1], 0] ];

  this.rotation2 =
        [ [t[0], 0],
          [t[2], t[1]],
          [0, t[3]] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function Tile () {
  this.letter = LETTERS[Math.floor(Math.random()*LETTERS.length)];
  this.score = POINTS[this.letter];
  this.scrabbleExtras = SCRABBLE[Math.floor(Math.random()*SCRABBLE.length)];
}

function rotate(block){
  rotation = block.rotation;
  block.rotation = rotation[0].map(function (_, c) { return rotation.map(function (r) { return r[c]; }); });
}

function generateTiles() {
  tileArray = []
  for (i = 0; i < 4; i++) {
    tileArray.push(new Tile());
  }
  return tileArray;
}

function getRandomBlock() {

  var result = Math.floor( Math.random() * 7 );
  var block;

  switch(result) {

    case 0: block = new LBlock(generateTiles()); break;
    case 1: block = new OBlock(generateTiles()); break;
    case 2: block = new ZBlock(generateTiles()); break;
    case 3: block = new TBlock(generateTiles()); break;
    case 4: block = new JBlock(generateTiles()); break;
    case 5: block = new SBlock(generateTiles()); break;
    case 6: block = new IBlock(generateTiles()); break;
  }

  block.color = Math.floor(Math.random() * 8);

  return block;
}

function drawPreview() {
  prevsize = 20;
  prevDrawX = nextBlock.gridX;
  prevDrawY = nextBlock.gridY + 4;

  prevctx.strokeStyle = "#fff";
  prevctx.beginPath();
  prevctx.rect(0, 0, 150, 100);
  prevctx.fillStyle="black";
  prevctx.fill();
  prevctx.stroke();

  for(var row = 0, len = nextBlock.rotations[0].length; row < len; row++) {
    for(var col = 0, len2 = nextBlock.rotations[0][row].length; col < len2; col++) {
      if(nextBlock.rotations[0][row][col] != 0) {
        tile = nextBlock.rotations[0][row][col];
        // console.log('tile coords')
        // console.log(prevDrawX);
        // console.log(prevDrawY);
        prevctx.strokeStyle = "#000";
        prevctx.beginPath();
        prevctx.rect(prevDrawX * prevsize, prevDrawY * prevsize, prevsize, prevsize);

        if (tile.scrabbleExtras == "NA") {
          image = new Image();
          image.src = "http://www.mobilier-beton.net/wp-content/uploads/2013/05/Wood1.jpg";
          pattern = prevctx.createPattern(image, "no-repeat");
          prevctx.fillStyle = pattern;
         };

        if (tile.scrabbleExtras == "WX2"){

          prevctx.fillStyle = "#82002C";
          prevctx.fill();
          prevctx.stroke();
        };
          if (tile.scrabbleExtras == "WX3"){

          prevctx.fillStyle = "#110649";
          prevctx.fill();
          prevctx.stroke();
        };

        if (tile.scrabbleExtras == "LX2"){

          prevctx.fillStyle = "#E77F9C";
          prevctx.fill();
          prevctx.stroke();
        };

        if (tile.scrabbleExtras == "LX3"){

          prevctx.fillStyle = "#5D709A";
          prevctx.fill();
          prevctx.stroke();
        };

        prevctx.fillRect(prevDrawX * prevsize, prevDrawY * prevsize, prevsize, prevsize);

        prevctx.strokeStyle = "#000";
        prevctx.beginPath();
        // context.fillStyle = "#3c0";
        prevctx.rect(prevDrawX * prevsize, prevDrawY * prevsize, prevsize, prevsize);
        prevctx.fill();
        prevctx.stroke();

        prevctx.fillStyle = "#000";
        prevctx.font = '16pt Arial';
        prevctx.fillText(tile.letter, (prevDrawX * prevsize + 5), (prevDrawY * prevsize + 15), prevsize);

        // prevctx.fillStyle = "#000";
        // prevctx.font = 'bolder pt Arial';
        // prevctx.fillText(tile.score, drawX * prevsize, drawY * prevsize, prevsize);
      }
      console.log(prevDrawX)
      prevDrawX += 1;
      console.log(prevDrawX)
    }
    prevDrawX = nextBlock.gridX + 2;
    prevDrawY += 1;
  }
}
