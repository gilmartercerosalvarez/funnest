import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';
import {PlaceComponent} from './modules/place/place.component';
import {ChampionshipComponent} from './modules/championship/championship.component';
import {GroupComponent} from "./modules/championship/group.component";
import {TeamComponent} from "./modules/championship/team.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Home',
        component: HomeComponent,
        children: [
            { path: '', pathMatch: 'full' },
            { path: 'Championship', component: ChampionshipComponent },
            { path: 'Home', component: HomeComponent }
        ]
    },
    {
        path: 'Place',
        component: PlaceComponent,
    },
    {
        path: 'Championship',
        component: ChampionshipComponent,
    },
    {
        path: 'group/:id',
        component: GroupComponent
    },
    {
        path: 'team/:id',
        component: TeamComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
