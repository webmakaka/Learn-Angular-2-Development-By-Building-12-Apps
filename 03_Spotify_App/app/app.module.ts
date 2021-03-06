import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports: [ BrowserModule, routes, HttpModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent ],
  bootstrap: [ AppComponent ],
  providers: [ SpotifyService ]
})

export class AppModule { }
