import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
   
  }
  onRegister(){
    this.authService.registerUser(this.registerObj);
    this.registerObj = {
      userName: '',
      email: '',
      password: '',
    };
    this.router.navigate(['/login']);
  }

}
