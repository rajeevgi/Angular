import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData : any ;

  constructor(){
    const loggedData = localStorage.getItem('login-user');   // Used to fetch the user credentials and assign to loggedDta.
    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  router = inject(Router);

  logOff() {
    localStorage.removeItem('login-User');
    this.router.navigateByUrl('app-login')
  }
}
