import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList : any[] = [];

  constructor(private http : HttpClient){

  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result : any) =>{
      this.userList = result;
    })
  }
}
