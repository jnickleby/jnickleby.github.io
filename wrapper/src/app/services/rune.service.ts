import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Rune} from '../domain/rune';

@Injectable({
  providedIn: 'root'
})
export class RuneService {

  hoveredRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);
  selectedRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);
  focusType = 'unfocus';

  constructor() { }

  public changeHover(rune?: Rune) {
    this.hoveredRune$.next(rune);
  }

  public selectRune(rune?: Rune) {
    const runeReplace = this.selectedRune$.getValue() === rune ? null : rune;
    this.selectedRune$.next(runeReplace);
    this.focusType = runeReplace ? 'focus' : 'unfocus';
  }
}
