import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailOverviewComponent } from './cocktail-overview/cocktail-overview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: CocktailOverviewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
