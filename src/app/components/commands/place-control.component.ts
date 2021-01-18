import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Command } from '../../core/models/command';
import { CommandType } from '../../core/models/command-type';
import { PlaceCommand } from '../../core/models/place-command';
import { Location } from '../../core/models/location';
import { Direction } from '../../core/models/direction';
import * as _ from "lodash";

@Component({
    selector: 'place-control',
    templateUrl: 'place-control.component.html'
})
export class PlaceControl implements OnInit {

    public directions = Direction;
    private directionsValues = _.filter(this.directions, function (val, key, obj) {
        return typeof val === 'number';    
    });

    @Output() commandClick = new EventEmitter<PlaceCommand>();

    private xLocation: number;
    private yLocation: number;
    private direction: Direction;
    private modal: NgbModalRef;

    constructor(private modalService: NgbModal) {
        
    }

    ngOnInit(): void {
    }

    open(placeContent: any) {
        this.reset();
        this.modal = this.modalService.open(placeContent, { ariaLabelledBy: 'modal-basic-title' });
    }

    reset(): void {
        this.xLocation = null;
        this.yLocation = null;
        this.direction = null;
    }

    public place() {        
        this.commandClick.emit(new PlaceCommand(new Location(this.xLocation, this.yLocation, this.direction)));
        this.modal.close();
    }
}