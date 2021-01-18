import { Robot } from "../../core/models/robot";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { PlayArea } from "../../core/models/play-area";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("robot - move", () => {

    let playArea = new PlayArea(1, 1);
    let robot = new Robot(playArea);
    

    it("should return true when move is valid", () => {

        //arrange
        robot.place(new Location(0, 0, Direction.North));

        //act
        let result = robot.move();

        //assert
        expect(result).to.be.true;
    });

    
    it("should return false when move is invalid", () => {

        //arrange
        robot.place(new Location(1, 1, Direction.North));

        //act
        let result = robot.move();

        //assert
        expect(result).to.be.false;
    });

    it("should update current location when move is valid", () => {

        //arrange
        robot.place(new Location(0, 0, Direction.North));

        //act
        robot.move();

        //assert
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(0);
        expect(robot.currentLocation.direction).to.equal(Direction.North);
    });

    it("should not update current location when move is invalid", () => {

        //arrange
        robot.place(new Location(1, 0, Direction.North));

        //act
        robot.move();

        //assert
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(0);
        expect(robot.currentLocation.direction).to.equal(Direction.North);
    });

});