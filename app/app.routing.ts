import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GalleryComponent} from './modules/gallery/gallery.component';
import {HomeComponent} from './modules/home/home.component';
import {MoviesComponent} from './modules/movies/movies.component';
import {EventsComponent} from './modules/events/events.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'Gallery',
        component: GalleryComponent
    },
    {
        path: 'Movies',
        component: MoviesComponent,
    },
    {
        path: 'Events',
        component: EventsComponent,
    },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
