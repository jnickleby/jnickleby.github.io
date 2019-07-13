import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {hoverTemplate} from '../../animations/hover.animation';
import {RuneService} from '../../services/rune.service';
import {Rune} from '../../domain/rune';

@Component({
  selector: 'mmr-tablet-button',
  template: `
    <button *ngIf="!isGlyph" class="tablet rune-tablet"
            (mouseenter)="runeService.changeHover(rune)"
            (mouseleave)="runeService.changeHover()"
            [@hoverRegular]="(runeService.hoveredRune$ | async)?.name === rune?.name ? 'up' : 'down'"
            (click)="runeService.selectRune(rune)">{{rune?.expression}}</button>

    <button *ngIf="isGlyph" class="tablet glyph-tablet"
            (mouseenter)="runeService.changeHover(rune)"
            (mouseleave)="runeService.changeHover()"
            [@hoverSmall]="(runeService.hoveredRune$ | async)?.name === rune?.name ? 'up' : 'down'"
            (click)="runeService.selectRune(rune)">{{rune?.expression}}</button>
  `,
  styles: [
    `
      .tablet {
        font-family: "Mountains of Christmas", cursive;
        border-radius: 2px; /*30px*/
        font-weight: bold;
        margin: 0 30px 30px 0;
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
        border-radius: 2px;
      }
    `
  ],
  animations: [
    hoverTemplate('hoverRegular', 28, 100, 50),
    hoverTemplate('hoverSmall', 16, 90, 40)
  ]
})
export class TabletButtonComponent {
  @Input() rune: Rune;
  @Input() isGlyph = false;

  constructor(public runeService: RuneService) {}
}
