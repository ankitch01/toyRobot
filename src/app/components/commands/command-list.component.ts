import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Command } from '../../core/models/command';
import { CommandType } from '../../core/models/command-type';
import { PlaceCommand } from '../../core/models/place-command';
import { Location } from '../../core/models/location';
import { Direction } from '../../core/models/direction';

@Component({
    selector: 'command-list',
    templateUrl: 'command-list.component.html'
})
export class CommandList implements OnInit {

    public commandTypes = CommandType;

    @Input() commandList: Array<Command>;

    ngOnInit(): void {
        
    }
}