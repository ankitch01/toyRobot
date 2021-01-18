import { CommandService } from "../../core/services/command.service";
import { PlayArea } from "../../core/models/play-area";
import { Robot } from "../../core/models/robot";
import { Location } from "../../core/models/location";
import { Direction } from "../../core/models/direction";
import { Command } from "../../core/models/command";
import { CommandType } from "../../core/models/command-type";
import { PlaceCommand } from "../../core/models/place-command";
import { expect } from "chai";
import "mocha";
import { describe, beforeEach } from "mocha";

describe("command service - execute commands", () => {

    let playArea = new PlayArea(5, 5);
    let robot = new Robot(playArea);
    let commandService = new CommandService(playArea, robot);

    beforeEach(() => {
        commandService = new CommandService(playArea, robot);
        commandService.commands = new Array<Command>();
        commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
    });

    it("should return false if there aren't any commands", () => {

        //arrange
        commandService.commands = null;

        //act/assert
        let result = commandService.executeCommands();
        
        expect(result).to.equal(false);
        commandService.commands = new Array<Command>();

        result = commandService.executeCommands();
        expect(result).to.be.false;
    });

    it("should return false if there are no place commands", () => {

        //arrange
        commandService.commands = new Array<Command>();
        commandService.commands.push(new Command(CommandType.Report));
        commandService.commands.push(new Command(CommandType.Left));

        //act
        let result = commandService.executeCommands();

        //assert
        expect(result).to.be.false;
    });

    it("should return false if there are no valid place commands", () => {

        //arrange
        commandService.commands = new Array<Command>();
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new PlaceCommand(new Location(8, 8, Direction.North)));
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new PlaceCommand(new Location(8, 8, Direction.North)));

        //act
        let result = commandService.executeCommands();

        //assert
        expect(result).to.be.false;
    });

    it("should ignore all commands before the first valid place command", () => {

        //arrange
        commandService.commands = new Array<Command>();
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new Command(CommandType.Move));
        commandService.commands.push(new PlaceCommand(new Location(8, 8, Direction.North)));
        commandService.commands.push(new Command(CommandType.Report));
        commandService.commands.push(new PlaceCommand(new Location(0, 0, Direction.North)));

        //act
        commandService.executeCommands();

        //assert
        expect(commandService.reports.length).to.equal(0);
        expect(commandService.robot.currentLocation.x).to.equal(0);
        expect(commandService.robot.currentLocation.y).to.equal(0);
        expect(commandService.robot.currentLocation.direction).to.equal(Direction.North);
    });

    it("should execute place commands", () => {

        //arrange/act assert

        commandService.executeCommands();
        expect(commandService.robot.currentLocation.x).to.equal(1);
        expect(commandService.robot.currentLocation.y).to.equal(1);
        expect(commandService.robot.currentLocation.direction).to.equal(Direction.North);

        commandService.commands.push(new PlaceCommand(new Location(2, 2, Direction.West)));
        commandService.executeCommands();
        expect(commandService.robot.currentLocation.x).to.equal(2);
        expect(commandService.robot.currentLocation.y).to.equal(2);
        expect(commandService.robot.currentLocation.direction).to.equal(Direction.West);

        commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
        commandService.commands.push(new PlaceCommand(new Location(3, 2, Direction.South)));
        commandService.executeCommands();
        expect(commandService.robot.currentLocation.x).to.equal(3);
        expect(commandService.robot.currentLocation.y).to.equal(2);
        expect(commandService.robot.currentLocation.direction).to.equal(Direction.South);

    });

    it("should execute move commands", () => {

        //arrange/act/assert
        
        commandService.commands.push(new Command(CommandType.Move));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(2);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.North);

        commandService.commands.push(new Command(CommandType.Move));
        expect(commandService.commands.length).to.equal(1);
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(3);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.North);

        commandService.commands = new Array<Command>();
        commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
        commandService.commands.push(new Command(CommandType.Move));
        commandService.commands.push(new Command(CommandType.Move));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(3);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.North);
    });

    it("should execute left commands", () => {

        //arrange/act/assert

        commandService.commands.push(new Command(CommandType.Left));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.West);

        commandService.commands.push(new Command(CommandType.Left));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.South);

        commandService.commands = new Array<Command>();
        commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.North)));
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new Command(CommandType.Left));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.South);
    });

    it("should execute left commands", () => {

        //arrange/act/assert

        commandService.commands.push(new Command(CommandType.Right));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.East);

        commandService.commands.push(new Command(CommandType.Right));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.South);

        commandService.commands = new Array<Command>();
        commandService.commands.push(new PlaceCommand(new Location(1, 1, Direction.South)));
        commandService.commands.push(new Command(CommandType.Right));
        commandService.commands.push(new Command(CommandType.Right));
        commandService.executeCommands();
        expect(robot.currentLocation.x).to.equal(1);
        expect(robot.currentLocation.y).to.equal(1);
        expect(robot.currentLocation.direction).to.equal(Direction.North);
    });

    it("should execute report commands", () => {

        //arrange/act/asert
        commandService.commands.push(new Command(CommandType.Report));
        commandService.executeCommands();
        expect(commandService.reports.length).to.equal(1);
        expect(commandService.reports[0]).to.equal("X: 1, Y: 1, Direction: North");

        commandService.commands.push(new Command(CommandType.Move));
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new Command(CommandType.Move));
        commandService.commands.push(new Command(CommandType.Report));
        commandService.executeCommands();
        expect(commandService.reports.length).to.equal(2);
        expect(commandService.reports[1]).to.equal("X: 2, Y: 0, Direction: West");
    });

    it("should return true with single valid place command", () => {

        //arrange/act
        let result = commandService.executeCommands();

        //assert
        expect(result).to.be.true;
    });

    it("should return true with multiple commands when starting with a valid place command", () => {

        //arrange/act
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new Command(CommandType.Report));
        commandService.commands.push(new Command(CommandType.Right));
        commandService.commands.push(new Command(CommandType.Move));
        let result = commandService.executeCommands();

        //assert
        expect(result).to.be.true;
    });

    it("should clear commands once all have been executed", () => {

        //arrange/act
        commandService.commands.push(new Command(CommandType.Left));
        commandService.commands.push(new Command(CommandType.Report));
        commandService.commands.push(new Command(CommandType.Right));
        commandService.commands.push(new Command(CommandType.Move));
        let result = commandService.executeCommands();

        //assert
        expect(commandService.commands.length).to.be.equal(0);
    });

});