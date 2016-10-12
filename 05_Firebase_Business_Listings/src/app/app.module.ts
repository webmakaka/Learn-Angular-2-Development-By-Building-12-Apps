import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyC41yfg05zlFgckmi0_vFPLaAMWJX1fH7E',
  authDomain: 'businesscontacts-443c0.firebaseapp.com',
  databaseURL: 'https://businesscontacts-443c0.firebaseio.com',
  storageBucket: 'businesscontacts-443c0.appspot.com'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
