import {Component} from '@angular/core';
import {HomeComponent} from './modules/home/home.component';

@Component({
    selector: 'funnest',
    templateUrl: 'app/modules/app.component.html',
    styleUrls: [ 'app/modules/assets/css/styles.css' ]
})

export class AppComponent {
    pageTitle = 'FUNNEST';
}
