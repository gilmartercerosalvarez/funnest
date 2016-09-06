import {Component} from '@angular/core';
import {HomeComponent} from './modules/home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/modules/app.component.html',
})

export class AppComponent {
    pageTitle = 'FUNNEST';
}
