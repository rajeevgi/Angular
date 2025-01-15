import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertComponent } from '../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @Input() message : string = '';

  @Output() message = new EventEmitter<string>();

  sendGreeting(value : string) {
    this.message.emit(value);
  }
}
