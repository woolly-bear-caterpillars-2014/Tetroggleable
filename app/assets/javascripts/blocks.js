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

Array.prototype.rotate = (function() {
    // save references to array functions to make lookup faster
    var push = Array.prototype.push,
        splice = Array.prototype.splice;

    return function(count) {
        var len = this.length >>> 0, // convert to uint
            count = count >> 0; // convert to int

        // convert count to value in range [0, len[
        count = ((count % len) + len) % len;

        // use splice.call() instead of this.splice() to make function generic
        push.apply(this, splice.call(this, 0, count));
        return this;
    };
})();

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

  block.color = Math.floor(Math.random() * 8);

  return block;
}
