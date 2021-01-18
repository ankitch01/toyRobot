import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PlayArea } from "../../core/models/play-area";
import { Robot } from "../../core/models/robot";

@Component({
    selector: 'play-area-control',
    templateUrl: 'play-area.component.html'
})
export class PlayAreaControl implements OnInit {

    private _playArea: PlayArea;

    get playArea(): PlayArea {
        return this._playArea;
    }

    @Input()
    set playArea(playArea: PlayArea) {
        this._playArea = playArea;
        this.buildTable();
    }

    @Input()
    public robot: Robot;

    private rows: Array<number>;
    private columns: Array<number>;

    ngOnInit(): void {
        
    }

    buildTable(): void {

        let self = this;

        this.rows = new Array<number>();
        this.columns = new Array<number>();

        for (let i = this.playArea.xLength; i >= 0; i--) {
            self.rows.push(i);
        }
        for (let i = this.playArea.yLength; i >= 0; i--) {
            self.columns.push(i);
        }
    }


}