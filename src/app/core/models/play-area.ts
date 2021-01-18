import { Direction } from "./direction";
import { Location } from "./location";
import { debug } from "util";

export class PlayArea {

    constructor(public xLength: number, public yLength: number) { }

    placeIsValid(location: Location): boolean {
        if (location.x < 0 || location.x > this.xLength || location.y < 0 || location.y > this.yLength) {
            return false;
        }
        return true;
    }

    moveIsValid(currentLocation: Location): boolean {
        var newLocation = new Location(currentLocation.x, currentLocation.y, currentLocation.direction);
        switch (currentLocation.direction) {
            case Direction.North:
                newLocation.x++;
                break;
            case Direction.East:
                newLocation.y++;
                break;
            case Direction.South:
                newLocation.x--;
                break;
            case Direction.West:
                newLocation.y--;
                break;
        }

        if (newLocation.x < 0 || newLocation.x > this.xLength || newLocation.y < 0 || newLocation.y > this.yLength) {
            return false;
        }

        return true;
    }

}