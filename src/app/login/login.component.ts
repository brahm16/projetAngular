import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticationService } from '../shared/authentication.service';
import { first } from 'rxjs/operators';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg:FormGroup;
  user:User;
  access_token:string;
  returnUrl: string;



  constructor(private authService:AuthenticationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.user=new User();
    this.fg=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
     
  })
  }
  get email(){
    return this.fg.get('email')
  }
  get password() {
    return this.fg.get('password');
  }
  save(){
    if(this.fg.valid){
      this.user = <User> this.fg.value;

      this.authService.login(this.user)  .pipe(first())
      .subscribe(
          data => {
              
              this.router.navigate([this.returnUrl]);
          },
          error => {
             console.log(error)
          });

    }
  }

}
