import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Rune} from '../domain/rune';

@Injectable({
  providedIn: 'root'
})
export class RuneService {

  hoveredRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);
  selectedRune$: BehaviorSubject<Rune> = new BehaviorSubject(null);

  constructor() { }

  public changeHover(rune?: Rune) {
    this.hoveredRune$.next(rune);
  }

  public selectRune(rune?: Rune) {
    this.selectedRune$.next(rune);
  }
}
