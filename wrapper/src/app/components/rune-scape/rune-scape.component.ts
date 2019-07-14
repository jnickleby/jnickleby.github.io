import {Component, OnInit} from '@angular/core';
import {PRIME_RUNES, RUNE_SETS} from '../../domain/rune';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {RuneService} from '../../services/rune.service';

@Component({
  selector: 'mmr-rune-scape',
  templateUrl: './rune-scape.component.html',
  styleUrls: ['./rune-scape.component.css'],
  animations: [
    trigger('focusToggle', [
      state('focus', style({
        'justify-content': 'flex-start'
      })),
      state('unfocus', style({
        'justify-content': 'center'
      })),
      transition('focus => unfocus', [
        animate('2s ease-in')
      ]),
      transition('unfocus => focus', [
        animate('2s ease-in')
      ]),
    ]),
    trigger('focusMovement', [
      state('focus', style({})),
      state('unfocus', style({})),
      transition('focus => unfocus', [
        style({transform: 'translate(400px)'}),
        animate('2s ease-in')
      ]),
      transition('unfocus => focus', [
        style({
          transform: 'translate(-100px)'
        }),
        animate('2s ease-in')
      ])
    ])
  ]
})
export class RuneScapeComponent implements OnInit {

  primeRunes = PRIME_RUNES;

  runeSets = RUNE_SETS;

  constructor(public runeService: RuneService) { }

  ngOnInit() {
  }

}
