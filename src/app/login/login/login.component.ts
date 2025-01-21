import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userObj: any = {
  //   userName: '',
  //   password: ''
  // }

  userObj : any = {
    EmailId : '',
    Password : ''
  }

  http = inject(HttpClient);   // Adding Dependency

  router = inject(Router);

  // onLogin() {
  //   if (this.userObj.userName == 'admin' && this.userObj.password == '123') {
  //     alert('login successfully...')
  //     localStorage.setItem('login-User', this.userObj.userName)
  //     this.router.navigateByUrl('app-alert');
  //   } else {
  //     alert('wrong credentials!')
  //   }
  // };


  onLogin() {
    this.http.post('https://projectapi.gerasim.in/api/UserApp/login', this.userObj).subscribe((res : any) => {
      if(res.result){
        alert('login successfully...');
        localStorage.setItem('login-user', JSON.stringify(res.data) );
        this.router.navigateByUrl('app-alert');
      }else{
        alert('Wrong Crendentials!');
      }
    })
  };
}
