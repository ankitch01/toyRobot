import { Robot } from "../../core/models/robot";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { PlayArea } from "../../core/models/play-area";
import { expect } from "chai";
import "mocha";
import { describe } from "mocha";

describe("robot - turn", () => {

    let playArea = new PlayArea(1, 1);
    let robot = new Robot(playArea);

    beforeEach(() => {
        robot.place(new Location(1, 1, Direction.North));
    });

    it("should change current location direction one position clockwise when turning right", () => {

        //act/assert
        robot.turnRight();
        expect(robot.currentLocation.direction).to.equal(Direction.East);

        robot.turnRight();
        expect(robot.currentLocation.direction).to.equal(Direction.South);

        robot.turnRight();
        expect(robot.currentLocation.direction).to.equal(Direction.West);

        robot.turnRight();
        expect(robot.currentLocation.direction).to.equal(Direction.North);

    });

    it("should change current location direction one position anti-clockwise when turning left", () => {

        //act/assert
        robot.turnLeft();
        expect(robot.currentLocation.direction).to.equal(Direction.West);

        robot.turnLeft();
        expect(robot.currentLocation.direction).to.equal(Direction.South);

        robot.turnLeft();
        expect(robot.currentLocation.direction).to.equal(Direction.East);

        robot.turnLeft();
        expect(robot.currentLocation.direction).to.equal(Direction.North);

    });
});