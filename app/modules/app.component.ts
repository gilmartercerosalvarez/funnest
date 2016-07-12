import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
//import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'fun-app',
    templateUrl: 'app/modules/app.component.html',
    directives: [HomeComponent, GalleryComponent]
})

export class AppComponent {
    author = 'Gilmar Terceros';
    pageTitle = 'Fun NEST';
}
