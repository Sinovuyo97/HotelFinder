import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%',
        opacity: 1,
        backgroundColor: '#717774'
      })),
      state('closed', style({
        height: '80rem',
        opacity: 0.8,
        backgroundColor: '#717772'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css']
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}