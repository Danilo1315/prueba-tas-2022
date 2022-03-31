import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store';
import { HomeComponent } from './home';

const routes: Routes = [
    { path: 'store', component: StoreComponent },
    { path: 'home', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
