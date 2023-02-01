import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FilmsComponent } from './components/films/films.component';
import { HeroineComponent } from './components/heroine/heroine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
