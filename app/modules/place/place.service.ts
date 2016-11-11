import { Injectable } from '@angular/core';

@Injectable()

/**
 * Responsible to get information related to events from data base.
 */
export class PlaceService
{
    /**
     * Return all places registered
     *
     * @returns {Promise<T>|Promise<R>}
     */
    public getPlaces(): Promise<any[]>
    {
        return Promise.resolve(this.buildMockPlaces());
    }

    /**
     * Return all images related to an determinate place
     * 
     * @param id
     * 
     * @returns {Promise<T>|Promise<R>}
     */
    public getImages(id:number): Promise<any[]>
    {
        return Promise.resolve(this.buildMockImages(id));
    }

    /**
     * Build data mock for events
     * 
     * @param id
     * @returns {{title: string, place: string, urlImage: string, date: string, description: string}[]}
     */
    private buildMockImages(id:number)
    {
        var images:Array<any> = [
            [
                {
                    title: 'Image 1',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 2',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 3',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 4',
                    smallImage: 'http://farm8.static.flickr.com/7448/11188317995_4127b61baa_s.jpg',
                    largeImage: 'http://farm8.static.flickr.com/7448/11188317995_4127b61baa_b.jpg',
                },
                {
                    title: 'Image 1',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 2',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 3',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 4',
                    smallImage: 'http://farm8.static.flickr.com/7448/11188317995_4127b61baa_s.jpg',
                    largeImage: 'http://farm8.static.flickr.com/7448/11188317995_4127b61baa_b.jpg',
                },
            ],
            [
                {
                    title: 'Image 1',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
                {
                    title: 'Image 2',
                    smallImage: 'http://farm4.static.flickr.com/3741/11188919165_b73f1ddc32_s.jpg',
                    largeImage: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                },
            ],

        ];

        return images[id];
    }

    /**
     * Return an list of places
     */
    public buildMockPlaces(): Array<any>
    {
        var places:Array<any> = [
                {
                    id:0,
                    name: 'Tolata',
                    photographies: 15,
                },
                {
                    id:1,
                    name: 'Cliza',
                    photographies: 54,
                },
                {
                    id:2,
                    name: 'Punata',
                    photographies: 5,
                },
            ];
        
        return places;
    }
}
