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
