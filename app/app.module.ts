import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {HomeComponent} from './modules/home/home.component';
import {ChampionshipComponent} from './modules/championship/championship.component';
import {PlaceComponent} from './modules/place/place.component';
import {GroupComponent} from "./modules/championship/group.component";
import {TeamComponent} from "./modules/championship/team.component";
import {PlayerComponent} from "./modules/championship/player.component";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ChampionshipComponent,
        PlaceComponent,
        GroupComponent,
        TeamComponent,
        PlayerComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
