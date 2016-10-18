import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'app/modules/home/home.component.html',
})

export class HomeComponent {
    pageTitle = 'Lugares en';
    places = [
        {
            name: 'Tolata',
            photographies: 15,
        },
        {
            name: 'Cliza',
            photographies: 54,
        },
        {
            name: 'Punata',
            photographies: 5,
        },
    ];
}
