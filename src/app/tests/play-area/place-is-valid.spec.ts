import { PlayArea } from "../../core/models/play-area";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("play area - place is vaid", () => {

    let playArea = new PlayArea(1, 1);

    it("should return true when location is valid", () => {

        //arrange/act
        const result = playArea.placeIsValid(new Location(1, 1, Direction.North));

        //asert
        expect(result).to.be.true;
    });

    it("should return false with x location greater than x in play area", () => {

        //arrange/act
        const result = playArea.placeIsValid(new Location(2, 1, Direction.North));

        //assert
        expect(result).to.be.false;
    });

    it("should return false with x location less than x in play area", () => {

        //arrange/act
        const result = playArea.placeIsValid(new Location(-1, 1, Direction.North));

        //assert
        expect(result).to.be.false;
    });

    it("should return false with y location greater than y in play area", () => {

        //arrange/act
        const result = playArea.placeIsValid(new Location(1, 2, Direction.North));

        //assert
        expect(result).to.be.false;
    });

    it("should return false with y location less than y in play area", () => {

        //arrange/act
        const result = playArea.placeIsValid(new Location(1, -1, Direction.North));

        //assert
        expect(result).to.be.false;
    });

});
