import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/models/user';
import { baseURLAuth } from './baseURL';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  public loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  
  headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('token')
  });

  login(user: User){
    return this.http.post<User>(
      baseURLAuth+"/login", {
      email: user.email,
      password: user.password
    }).pipe(map(user=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log(this.currentUserSubject);
      console.log(this.currentUserValue);
      return user;

      })
    )
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  register(user: User): Observable<User> {
    return this.http.post<User>(
      baseURLAuth+"/register", {email:user.email,password:user.password,firstname:user.firstName,lastname:user.lastName}).pipe(map(user=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(this.currentUserSubject);
        console.log(this.currentUserValue);
        return user;
  
        }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) { 

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
