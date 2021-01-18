import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Command } from '../../core/models/command';
import { CommandType } from '../../core/models/command-type';

@Component({
    selector: 'command-control',
    templateUrl: 'command-control.component.html'
})
export class CommandControl implements OnInit {

    private _commandType: CommandType;

    get commandType(): CommandType {
        return this._commandType;
    }

    @Input()
    set commandType(commandType: CommandType) {
        this._commandType = commandType;
        this.commandName = CommandType[this._commandType];
    }

    @Output() commandClick = new EventEmitter<Command>();

    public commandName: string;

    constructor() {

    }

    ngOnInit(): void {
    }

    public click() {
        this.commandClick.emit(new Command(this.commandType));
    }
}