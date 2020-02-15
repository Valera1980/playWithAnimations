import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Output, EventEmitter, HostBinding } from '@angular/core';
// animate('offset: translateY(-20px)')
@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('startAnim', [
      state('open', style({
        background: '#3d3d5c',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
      })),
      // state('closed', style({
      //   width: '100%',
      //   opacity: '0.9',
      //   height: '0'
      // })),
      // transition('* => open', animate('600ms')),
      transition('open => closed', animate('600ms'))
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.sometest, div', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
         stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ]
})
export class PreloaderComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  // @Input() startState;
  @Input() state = { open: false };
  // @Output() finishAnimation = new EventEmitter();
  // private _startState = 'closed';
  // @Input() set startState(st: string) {
  //   console.log('setter')
  //   this._startState = st;
  // setTimeout(() => {
  //   this._startState = 'closed';
  //   this.finishAnimation.emit();
  //   this._cd.detectChanges();
  // }, 2000);
  // }
  // get startState(): string {
  //   return this._startState;
  // }
  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }
  done(tt: any) {
    console.log('start ', tt);
  }
  start(tt: any) {
    console.log('done ', tt);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    console.log('on change', changes);
    setTimeout(() => {
      this.state = { open: false };
      this._cd.detectChanges();
    }, 2000);
  }

}
