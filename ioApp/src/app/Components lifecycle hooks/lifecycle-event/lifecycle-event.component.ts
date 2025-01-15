import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  firstName : string;

  constructor() {
    this.firstName = "Angular";
    console.log("Constructor called");
  }
  
  // ngOnInit() 
  ngOnInit() : void{
    console.log("ngOnInit called");
  }
  
  // ngOnChanges()
  ngOnChanges() : void {
    console.log("ngOnChanges called");
  }
  
  // ngDoCheck()
  ngDoCheck() : void {
    console.log("ngDoCheck called");
  }
  
  // ngAfterViewInit()
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  
  // ngAfterContentInit()
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  
  // ngAfterContentChecked()
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  
  // ngAfterViewChecked()
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  // ngOnDestroy()
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
