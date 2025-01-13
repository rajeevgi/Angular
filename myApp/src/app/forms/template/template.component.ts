import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj = {
    firstName : '',
    lastName : '',
    userName : '',
    city : '',
    state : '',
    zipCode : '',
    isAccepted : false
  }

  formValue : any ;

  onSubmit(){
    this.formValue = this.studentObj;
    console.log(this.studentObj);
  }

  resetForm(){
    this.studentObj = {
      firstName : '',
      lastName : '',
      userName : '',
      city : '',
      state : '',
      zipCode : '',
      isAccepted : false
    }
  }
}
