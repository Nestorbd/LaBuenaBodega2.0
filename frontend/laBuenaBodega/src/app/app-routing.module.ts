import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'wine-list',
    loadChildren: () => import('./wine-list/wine-list.module').then( m => m.WineListPageModule)
  },
  {
    path: 'add-wine',
    loadChildren: () => import('./add-wine/add-wine.module').then( m => m.AddWinePageModule)
  },
  {
    path: 'update-wine',
    loadChildren: () => import('./update-wine/update-wine.module').then( m => m.UpdateWinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
