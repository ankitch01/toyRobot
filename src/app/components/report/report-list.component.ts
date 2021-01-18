import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Command } from '../../core/models/command';
import { CommandType } from '../../core/models/command-type';
import { PlaceCommand } from '../../core/models/place-command';
import { Location } from '../../core/models/location';
import { Direction } from '../../core/models/direction';

@Component({
    selector: 'report-list',
    templateUrl: 'report-list.component.html'
})
export class ReportList implements OnInit {

    @Input() reportList: Array<string>;

    ngOnInit(): void {
        
    }
}