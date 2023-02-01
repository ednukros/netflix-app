import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { HeroineComponent } from './components/heroine/heroine.component';

const routes: Routes = [
  { path: '', component: HeroineComponent},
  { path: 'add-movie', component: FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
