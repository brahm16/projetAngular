import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  returnUrl:string;

  constructor(private auth: AuthenticationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user=new User();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  register(){
    this.auth.register(this.user) .subscribe(
      data => {
          
          this.router.navigate([this.returnUrl]);
      },
      error => {
         console.log(error)
      });

  
  }

}
