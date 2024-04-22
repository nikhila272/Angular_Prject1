import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registeredUsers: any[] = [];

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private readonly AUTH_TOKEN_KEY = 'authToken';

  // Expose the subject as an observable to be notified of changes
  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {
    this.checkAuthenticationStatus();

    // Load existing users from localStorage on service initialization
    const localData = localStorage.getItem('registeredUsers');
    if (localData != null) {
      this.registeredUsers = JSON.parse(localData);
    }
  }

  private checkAuthenticationStatus() {
    const authToken = localStorage.getItem(this.AUTH_TOKEN_KEY);
    if (authToken) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(userName: string, password: string): boolean {
    const isUserExist = this.registeredUsers.find(
      (user) =>
        user.userName === userName &&
        user.password === password
    );

    if (isUserExist != undefined) {
			localStorage.setItem('loggedInUser', userName);
      localStorage.setItem(this.AUTH_TOKEN_KEY, 'Y');
      this.isAuthenticatedSubject.next(true);
      this.router.navigate(['/home']);
      return true;
    } else {
      this.isAuthenticatedSubject.next(false);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

	registerUser(user: any): void {
    // Push the new user to the array
    this.registeredUsers.push(user);
    // Save the updated array to localStorage
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
