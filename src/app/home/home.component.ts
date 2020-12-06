import { Component, Inject, OnInit } from '@angular/core';
import { Phone } from '../../models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listPhone: Phone[];
  errMess: string;


  constructor(private phoneService: PhoneService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe((phones)=>{this.listPhone=phones},
    errmess => {this.errMess = <any>errmess});

  }
  

}
