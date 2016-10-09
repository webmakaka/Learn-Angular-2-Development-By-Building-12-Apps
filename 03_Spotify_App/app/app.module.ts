import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routes } from './app.routes';

import { AppComponent }  from './app.component';

import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [ BrowserModule, routes ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }



// precompile: {SearchComponent, Aboutcomponents}
