import { Robot } from "../../core/models/robot";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { PlayArea } from "../../core/models/play-area";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("robot - report", () => {

    let playArea = new PlayArea(5, 8);
    let robot = new Robot(playArea);

    it("should report correct location when robot first placed", () => {

        //arrange
        robot.place(new Location(0, 1, Direction.East));

        //act
        let result = robot.report();

        //assert
        expect(result).to.equal("X: 0, Y: 1, Direction: East");
    });

    it("should report correct location when robot moves", () => {

        //arrange
        robot.place(new Location(0, 1, Direction.North));

        //act/assert
        robot.move();
        let result = robot.report();
        expect(result).to.equal("X: 1, Y: 1, Direction: North");

        robot.move();
        result = robot.report();
        expect(result).to.equal("X: 2, Y: 1, Direction: North");
    });

    it("should report correct location when robot turns right", () => {

        //arrange
        robot.place(new Location(0, 1, Direction.North));

        //act/assert
        robot.turnRight();
        let result = robot.report();
        expect(result).to.equal("X: 0, Y: 1, Direction: East");

        robot.turnRight();
        result = robot.report();
        expect(result).to.equal("X: 0, Y: 1, Direction: South");
    });

    it("should report correct location when robot turns left", () => {

        //arrange
        robot.place(new Location(0, 1, Direction.North));

        //act/assert
        robot.turnLeft();
        let result = robot.report();
        expect(result).to.equal("X: 0, Y: 1, Direction: West");

        robot.turnLeft();
        result = robot.report();
        expect(result).to.equal("X: 0, Y: 1, Direction: South");
    });

});