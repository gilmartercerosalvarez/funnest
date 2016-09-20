import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {HomeComponent} from './modules/home/home.component';
import {GalleryComponent} from './modules/gallery/gallery.component';
import {MoviesComponent} from './modules/movies/movies.component';
import {EventsComponent} from './modules/events/events.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        MoviesComponent,
        EventsComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
