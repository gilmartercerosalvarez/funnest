import {Component, OnInit} from '@angular/core';
import {PlaceService} from "./place.service";

@Component({
    selector: 'event',
    templateUrl: 'app/modules/place/place.component.html',
    providers: [PlaceService],
})

/**
 * Class responsible to manage all data related to places.
 */
export class PlaceComponent implements OnInit
{
    images:Array<any>;
    places:Array<any>;
    place:string;

    /**
     * Responsible to set all attributes to be used in the class.
     *
     * @param placeService
     */
    public constructor(private placeService:PlaceService)
    {
    }

    /**
     * Initialization/deceleration before the constructor it's where/when components' bindings are resolved
     */
    public  ngOnInit(): void
    {
        this.getPlaces();
        this.getImages(0, 'Tolata');
    }

    /**
     * Get all places relates to an determinate place according an Id place
     */
    public getPlaces(): void
    {
        this.placeService.getPlaces().then(places => this.places = places);
        
    }

    /**
     * Get all images relates to an determinate place according an Id place
     *
     * @param id
     * @param place
     */
    public getImages(id:number, place:string): void
    {
        this.place = place;
        this.placeService.getImages(id).then(images => this.images = images);
    }
}
