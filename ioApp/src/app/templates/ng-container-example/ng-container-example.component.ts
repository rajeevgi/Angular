import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ng-container-example',
  imports: [CommonModule],
  templateUrl: './ng-container-example.component.html',
  styleUrl: './ng-container-example.component.css'
})
export class NgContainerExampleComponent {

  isContainer: boolean = true;

  http = inject(HttpClient);
  // constructor(private http : HttpClient) {
  // }
  userList: any[] = [];
  isApi: boolean = false;

  getUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      if (this.isApi == false) {
        this.isApi = true;
        this.userList = res;
      } else {
      }
      this.isApi = false;
    })
  }
}
