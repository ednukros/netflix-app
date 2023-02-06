import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'novedades', component: NovedadesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
