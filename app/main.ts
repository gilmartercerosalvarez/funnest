/**
 * Responsible to define the root component 
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './modules/app.component';
//import { APP_ROUTER_PROVIDERS } from './modules/app.routes';

bootstrap(AppComponent, [
    //APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));
