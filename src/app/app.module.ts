import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDrByCqrjUPeZ1ByTSEpw3lNGsj6WAyfqc',
  authDomain: 'businesscontacts-9d3b5.firebaseapp.com',
  databaseURL: 'https://businesscontacts-9d3b5.firebaseio.com',
  storageBucket: 'businesscontacts-9d3b5.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
