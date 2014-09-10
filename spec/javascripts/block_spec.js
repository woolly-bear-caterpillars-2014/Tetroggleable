

    tile1 = new Tile();
    tile1.letter = "A";
    tile2 = new Tile();
    tile2.letter = "B";
    tile3 = new Tile();
    tile3.letter = "C";
    tile4 = new Tile();
    tile4.letter = "D";

    var tileArray = [tile1, tile2, tile3, tile4];

describe ("LBlock", function () {
  beforeEach(function () {

    lBlock = new LBlock(tileArray);
    });

     it("should return the correct tile letter for LBlock rotation1", function() {

      expect(lBlock.rotation1).toBeDefined();
      expect(lBlock.rotation1[0][0].letter).toEqual('D')
     });

     it("should return the correct tile letter for LBlock rotation2", function() {

      expect(lBlock.rotation2).toBeDefined();
      expect(lBlock.rotation2[0][2].letter).toEqual('A')

     });

     it("should return the correct tile letter for LBlock rotation3", function() {

      expect(lBlock.rotation3).toBeDefined();
      expect(lBlock.rotation3[0][1].letter).toEqual('B')

     });

     it("should return the correct tile letter for LBlock rotation4", function() {

      expect(lBlock.rotation4).toBeDefined();
      expect(lBlock.rotation4[0][1].letter).toEqual('C')


    });
});

describe ("JBlock", function () {
  beforeEach(function () {

    jBlock = new JBlock(tileArray);
    });

     it("should return the correct tile letter for JBlock rotation1", function() {

      expect(jBlock.rotation1).toBeDefined();
      expect(jBlock.rotation1[0][1].letter).toEqual('A')
     });

     it("should return the correct tile letter for JBlock rotation2", function() {

      expect(jBlock.rotation2).toBeDefined();
      expect(jBlock.rotation2[0][2].letter).toEqual('C')

     });

     it("should return the correct tile letter for JBlock rotation3", function() {

      expect(jBlock.rotation3).toBeDefined();
      expect(jBlock.rotation3[0][1].letter).toEqual('B')

     });

     it("should return the correct tile letter for JBlock rotation4", function() {

      expect(jBlock.rotation4).toBeDefined();
      expect(jBlock.rotation4[1][1].letter).toEqual('D')


    });
});

describe ("IBlock", function () {
  beforeEach(function () {

    iBlock = new IBlock(tileArray);
    });

     it("should return the correct tile letter for iBlock rotation1", function() {

      expect(iBlock.rotation1).toBeDefined();
      expect(iBlock.rotation1[0][0].letter).toEqual('A')
     });

     it("should return the correct tile letter for iBlock rotation2", function() {

      expect(iBlock.rotation2).toBeDefined();
      expect(iBlock.rotation2[0][2].letter).toEqual('C')

     });

     it("should return the correct tile letter for iBlock rotation3", function() {

      expect(iBlock.rotation3).toBeDefined();
      expect(iBlock.rotation3[0][0].letter).toEqual('D')

     });

     it("should return the correct tile letter for iBlock rotation4", function() {

      expect(iBlock.rotation4).toBeDefined();
      expect(iBlock.rotation4[0][2].letter).toEqual('B')


    });
});

describe ("TBlock", function () {
  beforeEach(function () {

    tBlock = new TBlock(tileArray);
    });

     it("should return the correct tile letter for TBlock rotation1", function() {

      expect(tBlock.rotation1).toBeDefined();
      expect(tBlock.rotation1[1][1].letter).toEqual('A')
     });

     it("should return the correct tile letter for TBlock rotation2", function() {

      expect(tBlock.rotation2).toBeDefined();
      expect(tBlock.rotation2[0][0].letter).toEqual('B')

     });

     it("should return the correct tile letter for TBlock rotation3", function() {

      expect(tBlock.rotation3).toBeDefined();
      expect(tBlock.rotation3[1][1].letter).toEqual('C')

     });

     it("should return the correct tile letter for TBlock rotation4", function() {

      expect(tBlock.rotation4).toBeDefined();
      expect(tBlock.rotation4[0][1].letter).toEqual('D')


    });
});

describe ("OBlock", function () {
  beforeEach(function () {

    oBlock = new OBlock(tileArray);
    });

     it("should return the correct tile letter for OBlock rotation1", function() {

      expect(oBlock.rotation1).toBeDefined();
      expect(oBlock.rotation1[0][0].letter).toEqual('A')
     });

     it("should return the correct tile letter for OBlock rotation2", function() {

      expect(oBlock.rotation2).toBeDefined();
      expect(oBlock.rotation2[1][0].letter).toEqual('C')

     });

     it("should return the correct tile letter for OBlock rotation3", function() {

      expect(oBlock.rotation3).toBeDefined();
      expect(oBlock.rotation3[0][1].letter).toEqual('D')

     });

     it("should return the correct tile letter for OBlock rotation4", function() {

      expect(oBlock.rotation4).toBeDefined();
      expect(oBlock.rotation4[0][0].letter).toEqual('B')


    });
});


describe ("ZBlock", function () {
  beforeEach(function () {

    zBlock = new ZBlock(tileArray);
    });

     it("should return the correct tile letter for ZBlock rotation1", function() {

      expect(zBlock.rotation1).toBeDefined();
      expect(zBlock.rotation1[1][2].letter).toEqual('A')
     });

     it("should return the correct tile letter for ZBlock rotation2", function() {

      expect(zBlock.rotation2).toBeDefined();
      expect(zBlock.rotation2[1][0].letter).toEqual('B')

    });
});

describe ("SBlock", function () {
  beforeEach(function () {

    sBlock = new SBlock(tileArray);
    });

     it("should return the correct tile letter for SBlock rotation1", function() {

      expect(sBlock.rotation1).toBeDefined();
      expect(sBlock.rotation1[0][2].letter).toEqual('A')
     });

     it("should return the correct tile letter for SBlock rotation2", function() {

      expect(sBlock.rotation2).toBeDefined();
      expect(sBlock.rotation2[1][1].letter).toEqual('B')

    });
});t




