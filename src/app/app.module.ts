import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommandControl } from './components/commands/command-control.component';
import { CommandService } from './core/services/command.service';
import { CommandServiceFactory } from './core/services/command-service.factory';
import { PlaceControl } from './components/commands/place-control.component';
import { CommandList } from './components/commands/command-list.component';
import { ReportList } from './components/report/report-list.component';
import { PlayAreaControl } from './components/play-area/play-area.component';

import { routing } from './app.router';
import { PlaceCommand } from './core/models/place-command';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        CommandControl,
        PlaceControl,
        CommandList,
        ReportList,
        PlayAreaControl,
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: CommandService, useFactory: CommandServiceFactory}]
})
export class AppModule { }
