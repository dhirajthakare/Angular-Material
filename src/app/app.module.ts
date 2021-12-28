import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllFunctComponent } from './material-all-funct/material-all-funct.component';
import { MaterialAllFunctModule } from './material-all-funct/material-all-funct.module';
import { TestingComponent } from './testing/testing.component';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialAllFunctComponent,
    TestingComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAllFunctModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
