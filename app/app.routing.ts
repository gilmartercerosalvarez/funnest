import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './modules/gallery/gallery.component';
import {HomeComponent} from './modules/home/home.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Tolata',
        component: GalleryComponent
    },
    {
        path: 'Home',
        component: HomeComponent,
    },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
