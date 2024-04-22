import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onLogin() {
    const isAuthenticated = this.authService.login(this.loginObj.userName, this.loginObj.password);

    if (isAuthenticated) {
      this.router.navigate(['/home']);
    } else {
      alert('Incorrect username or password');
    }
  }
}
