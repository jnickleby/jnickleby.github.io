import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuneScapeComponent } from './components/rune-scape/rune-scape.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabletButtonComponent} from './components/single/tablet-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneScapeComponent,
    TabletButtonComponent,
    TabletButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
