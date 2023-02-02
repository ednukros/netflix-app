import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { ActionComponent } from './components/action/action.component';
import { AnimeComponent } from './components/anime/anime.component';
import { DramaComponent } from './components/drama/drama.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { TerrorComponent } from './components/terror/terror.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    ComedyComponent,
    ActionComponent,
    AnimeComponent,
    DramaComponent,
    SciFiComponent,
    TerrorComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
