import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(3)]),
    userName : new FormControl("some@gmail", [Validators.required, Validators.email]),
    state : new FormControl("", [Validators.required]),
    city : new FormControl("", [Validators.required, Validators.minLength(3)]),
    zipCode : new FormControl("", [Validators.required]),
    isAccepted : new FormControl(false, [Validators.requiredTrue])
  })

  formValue : any ;

  onSave(){
    this.formValue = this.studentForm.value;
  }

  reset(){
    this.studentForm.reset();
  }
}
