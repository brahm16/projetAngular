import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Phone } from 'src/models/phone';
import { baseURL } from '../shared/baseURL';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult = '';



  constructor(@Inject('baseURL') public baseURL,private modalService: NgbModal) { }

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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title1'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
