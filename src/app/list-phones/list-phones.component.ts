import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.css']
})
export class ListPhonesComponent implements OnInit {
  listPhone:Phone[];
  errMess:string;

  constructor(private phonesService:PhoneService) { }

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe((phones)=>{
      this.listPhone=phones;
    },
    errmess => {this.errMess = <any>errmess}
    )
  }
  deletePhone(phone: Phone){
    let index=this.listPhone.indexOf(phone);
    this.listPhone.splice(index,1);
    this.phonesService.deletePhone(phone).subscribe()

  }
  increment(phone: Phone){
    this.listPhone.filter(x=>x.id==phone.id)[0].quantity++;
   /* this.pannierService1.updatePannier(this.pannier.id,this.pannier).subscribe((p)=>{
      this.pannier=p;
    });*/
 }
  decrement(phone: Phone){
    this.listPhone.filter(x=>x.id==phone.id)[0].quantity--;
   /* this.pannierService1.updatePannier(this.pannier.id,this.pannier).subscribe((p)=>{
      this.pannier=p;
    });*/
 }
 confirmer(phone: Phone){
   this.phonesService.updatePhone(phone.id,phone).subscribe((p)=>{
     phone=p;
   })
 }

}
