import { Component, Input } from '@angular/core';
import { ChildComponent } from '../../child/child.component';

@Component({
  selector: 'app-alert',
  imports: [ChildComponent],
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

    parentData : string = 'initial data.';

}
