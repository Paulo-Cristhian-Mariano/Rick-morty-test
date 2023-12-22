import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: 'inicio',
        data: { title: 'home' },
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'favoritos',
        data: { title: 'favorites' },
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule)
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
