function LBlock() {

  this.rotation1 =
        [ [1, 0],
          [1, 0],
          [1, 1] ];

  this.rotation2 =
        [ [0, 0, 1],
          [1, 1, 1] ];

  this.rotation3 =
        [ [1, 1],
          [0, 1],
          [0, 1] ];

  this.rotation4 =
        [ [1, 1, 1],
          [1, 0, 0] ];

  this.rotation = 
        [ [1, 0],
          [1, 0],
          [1, 1] ];

  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function JBlock() {

  this.rotation1 =
        [ [0, 1],
          [0, 1],
          [1, 1] ];

  this.rotation2 =
        [ [1, 1, 1],
          [0, 0, 1] ];

  this.rotation3 =
        [ [1, 1],
          [1, 0],
          [1, 0] ];

  this.rotation4 =
        [ [1, 0, 0],
          [1, 1, 1] ];

  this.rotation =
        [ [0, 1],
          [0, 1],
          [1, 1] ];

  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -3;
}

function OBlock() {

  this.rotation1 =
        [ [1, 1],
          [1, 1] ];

  this.rotation =
        [ [1, 1],
          [1, 1] ];

  this.rotations = [ this.rotation1 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function IBlock() {

  this.rotation1 =
        [ [1],
          [1],
          [1],
          [1] ];

  this.rotation =
        [ [1],
          [1],
          [1],
          [1] ];

  this.rotation2 = [ [1,1,1,1] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 5;
  this.gridY = -4;
}

function TBlock() {

  this.rotation1 =
        [ [1, 1, 1],
          [0, 1, 0] ];

  this.rotation =
        [ [1, 1, 1],
          [0, 1, 0] ];

  this.rotation2 =
        [ [1, 0],
          [1, 1],
          [1, 0] ];

  this.rotation3 =
        [ [0, 1, 0],
          [1, 1, 1] ];

  this.rotation4 =
        [ [0, 1],
          [1, 1],
          [0, 1] ];

  this.rotations = [ this.rotation1, this.rotation2, this.rotation3, this.rotation4 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function ZBlock() {

  this.rotation1 =
        [ [1, 1, 0],
          [0, 1, 1] ];

  this.rotation2 =
        [ [0, 1],
          [1, 1],
          [1, 0] ];

  this.rotation =
        [ [1, 1, 0],
          [0, 1, 1] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function SBlock() {

  this.rotation1 =
        [ [0, 1, 1],
          [1, 1, 0] ];

  this.rotation =
        [ [0, 1, 1],
          [1, 1, 0] ];

  this.rotation2 =
        [ [1, 0],
          [1, 1],
          [0, 1] ];

  this.rotations = [ this.rotation1, this.rotation2 ];
  this.currentRotation = 0;

  this.color = 0;
  this.gridX = 4;
  this.gridY = -2;
}

function Tile () {
  
}

function getRandomBlock() {

  var result = Math.floor( Math.random() * 7 );
  var block;

  switch(result) {

    case 0: block = new LBlock(); break;
    case 1: block = new OBlock(); break;
    case 2: block = new ZBlock(); break;
    case 3: block = new TBlock(); break;
    case 4: block = new JBlock(); break;
    case 5: block = new SBlock(); break;
    case 6: block = new IBlock(); break;
  }

  for(var row = 0, len = block.rotation.length; row < len; row++) {
    for(var col = 0, len2 = block.rotation[row].length; col < len2; col++) {
      if(block.rotations[rotation][row][col] == 1) {
        block.rotation[row][col] = new 
        console.log(block.rotation[row][col])
      }
    }
  }

  block.color = Math.floor(Math.random() * 8);

  return block;
}
