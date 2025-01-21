import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  courseName : string = "Angular Framework";
  courseDuration :string = "1 month";

  showMessage(){
    alert("Welcome to user page.");
  }

  onStateChange(){
    alert("state changed!");
  }

  showLangName(name : string){
    alert(name);
  }
}
