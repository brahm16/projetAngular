import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-details-phone',
  templateUrl: './details-phone.component.html',
  styleUrls: ['./details-phone.component.css']
})
export class DetailsPhoneComponent implements OnInit {

  phone:Phone;
  errMess:string;

  constructor(private phoneService:PhoneService, private route: ActivatedRoute,@Inject("baseURL") public baseURL) { 
   
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.phoneService.getPhoneById(id).subscribe(c=>{
      this.phone=c;
    },errmess => {this.errMess = <any>errmess});
  }

}
