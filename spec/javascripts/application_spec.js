
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

    tile1 = new Tile();
    tile1.letter = "A";
    tile2 = new Tile();
    tile2.letter = "B";
    tile3 = new Tile();
    tile3.letter = "C";
    tile4 = new Tile();
    tile4.letter = "D";
    var tileArray = [tile1, tile2, tile3, tile4];
    jBlock = new JBlock(tileArray);
    });

     it("should return an JBlock rotation1", function() {

      expect(jBlock.rotation1).toBeDefined();
      expect(jBlock.rotation1[0][1].letter).toEqual('A')
     });

     it("should return an JBlock rotation2", function() {

      expect(jBlock.rotation2).toBeDefined();
      expect(jBlock.rotation2[0][2].letter).toEqual('C')

     });

     it("should return an JBlock rotation3", function() {

      expect(jBlock.rotation3).toBeDefined();
      expect(jBlock.rotation3[0][1].letter).toEqual('B')

     });

     it("should return an JBlock rotation4", function() {

      expect(jBlock.rotation4).toBeDefined();
      expect(jBlock.rotation4[1][1].letter).toEqual('D')


    });
});

describe ("IBlock", function () {
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
    iBlock = new IBlock(tileArray);
    });

     it("should return an iBlock rotation1", function() {

      expect(iBlock.rotation1).toBeDefined();
      expect(iBlock.rotation1[0][0].letter).toEqual('A')
     });

     it("should return an iBlock rotation2", function() {

      expect(iBlock.rotation2).toBeDefined();
      expect(iBlock.rotation2[0][2].letter).toEqual('C')

     });

     it("should return an iBlock rotation3", function() {

      expect(iBlock.rotation3).toBeDefined();
      expect(iBlock.rotation3[0][0].letter).toEqual('D')

     });

     it("should return an iBlock rotation4", function() {

      expect(iBlock.rotation4).toBeDefined();
      expect(iBlock.rotation4[0][2].letter).toEqual('B')


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

