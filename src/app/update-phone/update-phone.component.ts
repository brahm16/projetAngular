import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../../models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {
  phone: Phone;
  fg:FormGroup;
  selectedFile=null;
  updated:boolean=false;

  constructor(private phoneService:PhoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.phone=new Phone();
    const id = this.route.snapshot.params['id'];
    this.phoneService.getPhoneById(id).subscribe((phone)=>{this.phone=phone
      console.log(this.phone);
      let os=phone.android.os;
      let ui=phone.android.ui
      this.fg=new FormGroup({
        quantity:new FormControl(phone.quantity,[Validators.required]),
        name: new FormControl(phone.name,[Validators.required, Validators.minLength(3)]),
        age:new FormControl(phone.age,[Validators.required]),
        snippet: new FormControl(phone.snippet,[Validators.required, Validators.minLength(3)]),
        android: new FormGroup({
          os: new FormControl(os, Validators.required),
          ui: new FormControl(ui, Validators.required)
  
        })
    })
    })

    console.log(this.phone)
   




  }
 
  get quantity(){
    return this.fg.get('quantity')
  }
  get name() {
    return this.fg.get('name');
  }
  get age() {
    return this.fg.get('age');
  }
  get snippet() {
    return this.fg.get('snippet');
  }
  
  get os() {
    return this.fg.get('android').get('os');
  }

  get ui() {
    return this.fg.get('android').get('ui');
  }
  update(){
    if(this.fg.valid){
      this.phoneService.updatePhone(this.phone.id,this.phone).subscribe((phone)=>{
        this.phone=phone;
        this.updated=true;
        this.fg.reset();
      });

    }
 
  }

}
