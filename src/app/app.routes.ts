import { Routes } from '@angular/router';
import { OverviewComponent } from './components/content/overview/overview.component';
import { NotFoundComponent } from './components/content/not-found/not-found.component';

export const routes: Routes = 
[
    {
        path: 'overview',
        component: OverviewComponent
    },

    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
