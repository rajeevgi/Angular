import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})

export class ViewChildComponent implements AfterViewInit{
  @ViewChild('myDiv', {static : false}) myDiv !: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.myDiv.nativeElement);  // Access The div Element
    this.myDiv.nativeElement.style.backgroundColor = 'Yellow';  
  }

  greet(){
    console.log('Hello from view child component.');
  }
}
