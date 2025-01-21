import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-parent-child',
  imports: [ViewChildComponent],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {

  @ViewChild('childRef', { static : false }) child !: ViewChildComponent;

  callChildMethod(){
    this.child.greet();
  }
}
