import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Rune, RUNE_SETS, TIS, TISBAR} from '../domain/rune';

@Injectable({
  providedIn: 'root'
})
export class RuneService {

  runeSets = RUNE_SETS;

  hoveredRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);
  selectedRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);
  selectedRuneSet$: BehaviorSubject<{parent: Rune, children: Rune[]}> = new BehaviorSubject(null);

  constructor() {
    // this.selectRune(TIS);
  }

  public selectRune(rune?: Rune) {
    const runeReplace = this.selectedRune$.getValue() === rune ? null : rune;
    this.selectedRune$.next(runeReplace);

    console.log(this.runeSets.find(set => set.parent === rune.parentGroup || set.parent === rune));
    this.selectedRuneSet$.next(this.runeSets.find(set => set.parent === rune.parentGroup || set.parent === rune));
  }
}
