
describe ("tile", function(){
  beforeEach(function () {
    tile = new Tile();
  });

     it("set tile to a letter", function() {
      tile.letter = "F"
      expect(tile.letter).toBe("F");
      });

     it("set tile to a score value", function() {
      tile.score = 1
      expect(tile.score).toBe(1);
      });

     it("set tile to have scrabble value", function() {
      tile.scrabbleExtras = "LX2"
      expect(tile.scrabbleExtras).toBe("LX2");
    });
});

describe ("LBlock", function () {
  beforeEach(function () {

    tile1 = new Tile();
    tile1.letter = "A";
    tile2 = new Tile();
    tile2.letter = "B";
    tile3 = new Tile();
    tile3.letter = "C";
    tile4 = new Tile();
    tile4.letter = "D";
    var tileArray = [tile1, tile2, tile3, tile4];
    lBlock = new LBlock(tileArray);
    });

     it("should return an LBlock rotation1", function() {

      expect(lBlock.rotation1).toBeDefined();
      expect(lBlock.rotation1[0][0].letter).toEqual('D')
     });

     it("should return an LBlock rotation2", function() {

      expect(lBlock.rotation2).toBeDefined();
      expect(lBlock.rotation2[0][2].letter).toEqual('A')

     });

     it("should return an LBlock rotation3", function() {

      expect(lBlock.rotation3).toBeDefined();
      expect(lBlock.rotation3[0][1].letter).toEqual('B')

     });

     it("should return an LBlock rotation4", function() {

      expect(lBlock.rotation4).toBeDefined();
      expect(lBlock.rotation4[0][1].letter).toEqual('C')


    });
});

describe ("JBlock", function () {
  beforeEach(function () {
    jBlock = new JBlock([]);
    });

     it("should return an JBlock rotation object", function() {

      expect(jBlock.rotation1).toBeDefined();
     });

     it("should return an JBlock rotation object", function() {

      expect(jBlock.rotation2).toBeDefined();

     });

     it("should return an JBlock rotation object", function() {

      expect(jBlock.rotation3).toBeDefined();

     });

     it("should return an JBlock rotation object", function() {

      expect(jBlock.rotation4).toBeDefined();

    });
});

describe ("OBlock", function () {
  beforeEach(function () {
    oBlock = new OBlock([]);
    });

     it("should return an OBlock rotation object", function() {

      expect(oBlock.rotation1).toBeDefined();
     });

     it("should return an OBlock rotation object", function() {

      expect(oBlock.rotation2).toBeDefined();

     });

     it("should return an OBlock rotation object", function() {

      expect(oBlock.rotation3).toBeDefined();

     });

     it("should return an OBlock rotation object", function() {

      expect(oBlock.rotation4).toBeDefined();

     });
  });

describe ("TBlock", function () {
  beforeEach(function () {
    tBlock = new TBlock([]);
    });

     it("should return an TBlock rotation object", function() {

      expect(tBlock.rotation1).toBeDefined();
     });

     it("should return an TBlock rotation object", function() {

      expect(tBlock.rotation2).toBeDefined();

     });

     it("should return an TBlock rotation object", function() {

      expect(tBlock.rotation3).toBeDefined();

     });

     it("should return an TBlock rotation object", function() {

      expect(tBlock.rotation4).toBeDefined();

     });
  });

// describe("startGame", function () {
//   beforeEach(function () {
//     var start = new startGame();
//   });

//     it("should be defined", function () {
//       expect(drawPreview()).toHaveBeenCalled();
//     })
// })
