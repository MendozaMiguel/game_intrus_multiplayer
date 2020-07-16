
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home-routing.module#HomeModule'
  },
  // {
  //   path: "**",
  //   redirectTo: "not-found",
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
