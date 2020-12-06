import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Phone } from 'src/models/phone';
import { baseURL } from '../shared/baseURL';

@Component({
  selector: 'app-item-phone',
  templateUrl: './item-phone.component.html',
  styleUrls: ['./item-phone.component.css']
})
export class ItemPhoneComponent implements OnInit {
  @Input() phone:Phone;
  @Output() delete = new EventEmitter<Phone>();
  @Output() plusQuantite= new EventEmitter<Phone>();
  @Output() moinsQuantite= new EventEmitter<Phone>();
  @Output() confirm= new EventEmitter<Phone>();
  show:boolean=false;


  constructor(@Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
  console.log(this.phone);
  }
  add(){
this.plusQuantite.emit(this.phone);
this.show=true;
  }
  moin(){
this.moinsQuantite.emit(this.phone);
this.show=true;
  }
  onSubmit(){
    this.delete.emit(this.phone);
  }
  confirmation(){
    this.show=false;
    this.confirm.emit(this.phone);
  }

}
