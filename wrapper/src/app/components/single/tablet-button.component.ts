import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {hoverTemplate} from '../../animations/hover.animation';
import {RuneService} from '../../services/rune.service';
import {NOT, Rune} from '../../domain/rune';
import {activateTemplate} from '../../animations/active.animation';

@Component({
  selector: 'mmr-tablet-button',
  template: `
    <button class="tablet"
            [ngClass]="classes"
            [style.border-radius.px]="borderRadius"
            (click)="selectRune()">{{rune?.expression}}</button>
  `,
  styles: [
    `
      .tablet {
        font-family: "Mountains of Christmas", cursive;
        font-weight: bold;
        margin: 15px 15px;
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }

      .tablet:hover {
        box-shadow: 0 14px 16px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }

      .tablet:active {
        box-shadow: 0 6px 7px rgba(0, 0, 0, 0.20), 0 5px 5px rgba(0, 0, 0, .024);
        border: 1px solid rgba(0, 0, 0, 0.2)
      }

      .glyph-tablet {
        width: 40px;
        height: 40px;
        font-size: 14pt;
      }

      .rune-tablet {
        width: 70px;
        height: 70px;
        font-size: 24pt;
      }

      .selected {
        background-color: #a1d1ff;
        border-color: #6592bf;
      }
    `
  ]
})
export class TabletButtonComponent implements OnInit {
  @Input() rune: Rune;
  @Input() isGlyph = false;
  @Input() rounded = true;

  classes = this.standardClass();

  clicked = false;

  borderRadius = this.rounded ? 300 : 4;

  constructor(public runeService: RuneService) {}

  ngOnInit(): void {
    this.provideClasses();
  }

  selectRune() {
    this.runeService.selectRune(this.rune);
  }

  standardClass() {
    return this.isGlyph ? 'glyph-tablet' : 'rune-tablet';
  }

  provideClasses() {
    this.runeService.selectedRuneSet$.subscribe(rune => {
      this.classes = this.standardClass();

      if (rune) {
        const currentRune = this.runeService.selectedRune$.getValue();

        this.classes += currentRune === this.rune || currentRune.parentGroup === this.rune ? ' selected' : '';
      }
    });
  }
}
