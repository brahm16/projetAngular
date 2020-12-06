import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() phone: Phone;
  @Output() add = new EventEmitter<Phone>();


  constructor(@Inject("baseURL") public baseURL) { }

  ngOnInit(): void {
    console.log(this.baseURL)
  }
  onSubmit(){
    this.add.emit(this.phone);
  }

}
