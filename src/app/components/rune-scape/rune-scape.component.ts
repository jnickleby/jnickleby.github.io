import { Component, OnInit } from '@angular/core';
import {PRIME_RUNES} from '../../domain/rune';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css']
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  constructor() { }

  ngOnInit() {
  }

}
