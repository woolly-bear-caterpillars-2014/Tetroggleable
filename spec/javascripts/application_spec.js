
describe ("tile", function(){
  beforeEach(function () {
    tile = new Tile();
  });

     it("set tile to a letter", function() {
      tile.letter = "A"
      expect(tile.letter).toBe("A");
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
    lBlock = new LBlock(t);
    });

     it("assigns LBlocks rotation1 pattern", function() {

      expect(lBlock.rotation1).toBe( );

  });
});
