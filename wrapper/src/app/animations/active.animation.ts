import {animate, state, style, transition, trigger} from '@angular/animations';

export function activateTemplate(triggerName: string, shadowAmount: number, decreaseAmount: number) {
  return  trigger(triggerName, [
    state('active', style({
      'box-shadow': `0 1px ${decreaseAmount}px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
      transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
    })),
    state('inactive', style({
      'box-shadow': `0 14px ${shadowAmount}px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
      transition: 'all 0.3s cubic-bezier(.25,.8.25,1)'
    })),
    transition('up => down', [
      animate('100ms')
    ]),
    transition('down => up', [
      animate('50ms')
    ])
  ]);
}
