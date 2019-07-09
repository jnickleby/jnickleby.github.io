import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuneScapeComponent } from './components/rune-scape/rune-scape.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneScapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
