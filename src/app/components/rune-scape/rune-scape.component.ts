import { Component, OnInit } from '@angular/core';
import {PRIME_RUNES, Rune, RUNE_SETS} from '../../domain/rune';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css'],
  animations: [
    trigger('enteredExited', [
      state('entered', style({
        height: '70px',
        width: '70px',
        'font-size': '24pt'
      })),
      state('exited', style({
        height: '46px',
        width: '46px',
        'font-size': '18pt'
      })),
      transition('exited => entered', [
        animate('100ms')
      ]),
      transition('entered => exited', [
        animate('50ms')
      ])
    ])
  ]
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  runeSets = RUNE_SETS;

  selectedRune: Rune = null;

  hoveringOver = 0;

  constructor() { }

  ngOnInit() {
  }

  changeRune(rune: Rune) {
    this.selectedRune = this.selectedRune === rune ? null : rune;
  }

}
