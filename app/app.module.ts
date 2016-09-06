import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {GalleryComponent} from './modules/gallery/gallery.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}
