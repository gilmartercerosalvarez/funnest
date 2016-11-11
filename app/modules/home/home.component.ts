import {Component, OnInit } from '@angular/core';
import {EventService} from "./events.service";

@Component({
    selector: 'home',
    templateUrl: 'app/modules/home/home.component.html',
    providers: [EventService]
})

/**
 * Home component responsible to manage al data required to be displayed when the page are going to load
 */
export class HomeComponent implements OnInit
{
    events:Array<any>;

    /**
     * Responsible to set all attributes to be used in the class.
     * @param eventService
     */
    public constructor(private eventService:EventService)
    {
    }

    /**
     * Initialization/deceleration before the constructor it's where/when components' bindings are resolved
     */
    public  ngOnInit(): void
    {
        this.getEvents();
    }

    /**
     * Get all the events from the service and set in the attribute class that are going to use to display in UI
     */
    public getEvents(): void
    {
        this.eventService.getEvents().then(events => this.events = events);
    }
}
