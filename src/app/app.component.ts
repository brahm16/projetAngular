import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'appAngular';
  returnUrl: string="/login";
  isLogin:boolean;

  constructor(private authenticationService:AuthenticationService,private router: Router){
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
    console.log(changes);
  }
  ngOnInit(): void {
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
  }
  logout(){
    this.authenticationService.logout();
    if(this.authenticationService.currentUserValue)
    this.isLogin=true;
    else
    this.isLogin=false;
    this.router.navigate([this.returnUrl]);


  }
}
