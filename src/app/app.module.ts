import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { DramaComponent } from './components/drama/drama.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { TerrorComponent } from './components/terror/terror.component';
import { FilmsComponent } from './components/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    ComedyComponent,
    DramaComponent,
    SciFiComponent,
    TerrorComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
