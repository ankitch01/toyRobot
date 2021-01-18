import { Robot } from "../../core/models/robot";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { PlayArea } from "../../core/models/play-area";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("robot - place", ()=> {

    let playArea = new PlayArea(1, 1);
    let robot = new Robot(playArea);

    it("should return true when location is valid", () => {

        //arrange/act
        var result = robot.place(new Location(1, 1, Direction.North));

        //assert
        expect(result).to.be.true;
    });

    it("should return false when place invalid", () => {

        //arrange/act
        let result = robot.place(new Location(-1, -1, Direction.North));

        //assert
        expect(result).to.be.false;
    });


    it("should set current location", () => {

        //arrange
        playArea = new PlayArea(5, 5);
        robot = new Robot(playArea);

        //act
        robot.place(new Location(2, 3, Direction.West));

        //assert
        expect(robot.currentLocation.x).to.equal(2);
        expect(robot.currentLocation.y).to.equal(3);
        expect(robot.currentLocation.direction).to.equal(Direction.West);
    });

});
