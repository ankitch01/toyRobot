import { PlayArea } from "../../core/models/play-area";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("play area - move is vaid", () => {

    let playArea = new PlayArea(2, 2);

    it("should return true when location is valid", () => {

        //arrange/act
        let result = playArea.moveIsValid(new Location(1, 1, Direction.North));

        //assert
        expect(result).to.be.true;
    });

    it("should return false when new x location greater than x in play area", () => {

        //arrange/act
        let result = playArea.moveIsValid(new Location(2, 1, Direction.North));

        //assert
        expect(result).to.be.false;
    });

    it("should return false when new x location less than x in play area", () => {

        //arrange/act
        let result = playArea.moveIsValid(new Location(0, 1, Direction.South));

        //assert
        expect(result).to.be.false;
    });

    it("should return false when new y location greater than y in play area", () => {

        //arrange/act
        let result = playArea.moveIsValid(new Location(2, 2, Direction.East));

        //assert
        expect(result).to.be.false;
    });

    it("should return false when new y location less than y in play area", () => {

        //arrange/act
        let result = playArea.moveIsValid(new Location(0, 0, Direction.West));

        //assert
        expect(result).to.be.false;
    });

});