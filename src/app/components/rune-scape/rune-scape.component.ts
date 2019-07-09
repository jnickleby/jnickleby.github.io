import { Component, OnInit } from '@angular/core';
import {PRIME_RUNES, Rune, RUNE_SETS} from '../../domain/rune';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css']
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  runeSets = RUNE_SETS;

  selectedRune: Rune = null;

  constructor() { }

  ngOnInit() {
  }

  changeRune(rune: Rune) {
    this.selectedRune = this.selectedRune === rune ? null : rune;
  }

}
