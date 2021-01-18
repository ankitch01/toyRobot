import { Command } from "./command";
import { CommandType } from "./command-type";
import { Location } from "./location";

export class PlaceCommand extends Command {
    constructor(public location: Location) {
        super(CommandType.Place);
    }
}