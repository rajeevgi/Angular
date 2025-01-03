import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visible : boolean = false;
  isDiv2Visible : string = "No";
  dayName : string = "";

  myCities : string[] = ["Mumbai", "Navi-mumbai","Pune","Jalna"];

  studentList : any[] = [
    {name : 'AAA', mobile : '9999988888', city : 'Mumbai', isActive : false},
    {name : 'BBB', mobile : '9999977777', city : 'Navi-mumbai', isActive : false},
    {name : 'CCC', mobile : '9999966666', city : 'Thane', isActive : true},
    {name : 'DDD', mobile : '9999955555', city : 'Pune', isActive : true},
    {name : 'EEE', mobile : '9999944444', city : 'Nashik', isActive : false},
  ];

  showHideDiv1(isShow : boolean){
    this.isDiv1Visible = isShow;
  }

  // showHideDiv2(isShow : boolean){
  //   this.isDiv2Visible = isShow;
  // }

  // showHideDiv3(isShow : boolean){
  //   this.isDiv3Visible = isShow;
  // }
}
