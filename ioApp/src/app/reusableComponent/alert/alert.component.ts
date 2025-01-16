import { Component, Input } from '@angular/core';
import { ChildComponent } from '../../child/child.component';
import { ChildTwoComponent } from '../../child/child-two/child-two.component';

@Component({
  selector: 'app-alert',
  imports: [ChildComponent, ChildTwoComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  // @Input() username!: string;
  // parentUsername = "John Doe";

  // message : string = '';

  // handleMessage(message : string){
  //   this.message = message;
  // }

  // list = ['Item1','Item2','Item3'];

  // updateItems(){
  //   this.list.push('New Item');
  // }

  // user = {
  //   name : 'rajeev',
  //   gender : 'male'
  // };

  // username : string = "";
  // email : string = "";

  // handleData(Data : { username : string, email : string }){
  //   this.username = Data.username;
  //   this.email = Data.email;
  // }

  // parentData : string = 'initial data.';

  // username: string = 'Rajeev';

  // receivedUsername : string = '';
  // receivedStatus : string = '';

  // handleUserNameChange(newUserName : string){
  //   this.receivedUsername = newUserName;
  // }

  // handleStatusChange(newStatus : string){
  //   this.receivedStatus = newStatus;
  // }

  siblingData : string = '';  // Data to pass between siblings.

  handleSiblingData(data : string){
    this.siblingData = data;       // Update Parent state with data from sibling 1
  }

}
