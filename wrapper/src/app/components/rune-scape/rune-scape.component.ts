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
        height: '33px',
        width: '33px',
        'font-size': '14pt'
      })),
      transition('exited => entered', [
        animate('100ms')
      ]),
      transition('entered => exited', [
        animate('50ms')
      ])
    ]),
    trigger('upDown', [
      state('down', style({
        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
      })),
      state('up', style({
        'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
      })),
      transition('up => down', [
        animate('100ms')
      ]),
      transition('down => up', [
        animate('50ms')
      ])
    ]),
    trigger('upDownSmall', [
      state('down', style({
        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
      })),
      state('up', style({
        'box-shadow': '0 14px 16px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
      })),
      transition('up => down', [
        animate('90ms')
      ]),
      transition('down => up', [
        animate('40ms')
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
