import {animate, state, style, transition, trigger} from '@angular/animations';

export function hoverTemplate(triggerName: string, shadowAmount: number, upDownTime: number, downUpTime: number) {
  return  trigger(triggerName, [
    state('down', style({
      'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
    })),
    state('up', style({
      'box-shadow': `0 14px ${shadowAmount}px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
      transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
    })),
    transition('up => down', [
      animate(upDownTime)
    ]),
    transition('down => up', [
      animate(downUpTime)
    ])
  ]);
}
