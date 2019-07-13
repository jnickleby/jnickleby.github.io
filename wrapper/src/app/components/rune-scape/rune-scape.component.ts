import {Component, OnInit} from '@angular/core';
import {PRIME_RUNES, RUNE_SETS} from '../../domain/rune';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css']
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  runeSets = RUNE_SETS;

  constructor() { }

  ngOnInit() {
  }

}
