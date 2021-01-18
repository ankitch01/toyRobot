import { Location } from "./location";
import { PlayArea } from "./play-area";
import { Direction } from "./direction";

export class Robot {

    public currentLocation: Location;

    constructor(public playArea: PlayArea) { }

    place(location: Location): boolean {
        if (this.playArea.placeIsValid(location)) {
            this.currentLocation = location;
            return true;
        }
        return false;
    }

    move(): boolean {
        if (this.playArea.moveIsValid(this.currentLocation)) {
            switch (this.currentLocation.direction) {
                case Direction.North:
                    this.currentLocation.x++;
                    break;
                case Direction.East:
                    this.currentLocation.y++;
                    break;
                case Direction.South:
                    this.currentLocation.x--;
                    break;
                case Direction.West:
                    this.currentLocation.y--;
                    break;
            }
            return true;
        }
        return false;
    }

    turnLeft(): void {
        this.setDireciton(false);
    }

    turnRight(): void {
        this.setDireciton(true);
    }

    report(): string {
        return `X: ${this.currentLocation.x}, Y: ${this.currentLocation.y}, Direction: ${Direction[this.currentLocation.direction]}`;
    }

    private setDireciton(incrementClockWise: boolean): void {
        if (incrementClockWise) {
            if (this.currentLocation.direction == Direction.West) {
                this.currentLocation.direction = Direction.North;
            }
            else {
                this.currentLocation.direction++;
            }
        }
        else {
            if (this.currentLocation.direction == Direction.North) {
                this.currentLocation.direction = Direction.West;
            }
            else {
                this.currentLocation.direction--;
            }
        }
        
    }

}