import {Component, OnInit} from '@angular/core';
import {PRIME_RUNES, RUNE_SETS} from '../../domain/rune';
import {RuneService} from '../../services/rune.service';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css'],
  animations: []
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  runeSets = RUNE_SETS;

  constructor(public runeService: RuneService) { }

  ngOnInit() {

  }

}
