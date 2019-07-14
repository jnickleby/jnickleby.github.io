import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuneScapeComponent } from './components/rune-scape/rune-scape.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabletButtonComponent} from './components/single/tablet-button.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { RuneWallComponent } from './components/rune-wall/rune-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneScapeComponent,
    TabletButtonComponent,
    TabletButtonComponent,
    SandboxComponent,
    RuneWallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
