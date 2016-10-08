import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ProfileComponent } from './components/profile.component';

import { GithubService } from './services/github.service';
// import { HTTP_PROVIDERS } from '@angular/http';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, HttpModule],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap: [ AppComponent ],
  providers: [ GithubService]
  // providers: [ GithubService]
})
export class AppModule { }
