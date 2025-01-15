import { Component, Input } from '@angular/core';
import { ChildComponent } from '../../child/child.component';

@Component({
  selector: 'app-alert',
  imports: [ChildComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  message: string ='';

  onGreet(greet : string) {
    this.message = greet;
  }
}
