import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { FilmsComponent } from './components/films/films.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { SeriesComponent } from './pages/series/series.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    FilmsComponent,
    ListaComponent,
    NovedadesComponent,
    SeriesComponent,
    PeliculasComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
