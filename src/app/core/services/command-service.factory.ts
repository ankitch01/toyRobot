import { CommandService } from "../services/command.service";
import { PlayArea } from "../models/play-area";
import { Robot } from "../models/robot";

export function CommandServiceFactory(): CommandService {

    let playArea = new PlayArea(5, 5);
    let robot = new Robot(playArea);

    return new CommandService(playArea, robot);

}