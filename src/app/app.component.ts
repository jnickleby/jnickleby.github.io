import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mimir';

  chosenFont = 'nanum-pen-script';

  fonts = [
    ['literata', 'Literata'],
    ['mountains-of-christmas', 'Mountains of Christmas'],
    ['quicksand', 'Quicksand'],
    ['teko', 'Teko'],
    ['zilla-slab', 'Zilla Slab'],
    ['concert-one', 'Concert One'],
    ['libre-barcode', 'Libre Barcode 128 Text'],
    ['gochi-hand', 'Gochi Hand'],
    ['nanum-pen-script', 'Nanum Pen Script']
  ];
}
