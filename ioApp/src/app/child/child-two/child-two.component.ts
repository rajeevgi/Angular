import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  imports: [],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {

  @Input() data !: string;

}
