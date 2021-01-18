import { Component, OnInit } from '@angular/core';

import { CommandService } from '../../core/services/command.service'
import { Command } from '../../core/models/command';
import { PlaceCommand } from '../../core/models/place-command';
import { CommandType } from '../../core/models/command-type';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public commandTypes = CommandType;

    constructor(public service: CommandService) {       
    }

    ngOnInit(): void {
    }

    commandClicked($event: Command): void {     
        this.service.commands.push($event);
    }

    executeClick(): void {
        this.service.executeCommands();
    }

}