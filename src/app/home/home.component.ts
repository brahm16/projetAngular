import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Phone } from '../../models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listPhone: Phone[];
  listPhoneCopy: Phone[];
  errMess: string;


  constructor(private phoneService: PhoneService,
    @Inject('baseURL') private baseURL,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe((phones)=>{this.listPhone=phones
    this.listPhoneCopy=phones;
    },
    errmess => {this.errMess = <any>errmess});

  }
  filterList(id :number){
    console.log("filtered "+id);
    if(id==1)
    this.listPhone=this.listPhoneCopy.filter(x=>x.quantity==0);
    if(id==2)
    this.listPhone=this.listPhoneCopy.filter(x=>x.quantity>0);
    if(id==0)
    this.listPhone=this.listPhoneCopy;
  }
  filterListAge(id: number){
    if(id==1)
    this.listPhone=this.listPhoneCopy.filter(x=>x.age<=2);
    if(id==2)
    this.listPhone=this.listPhoneCopy.filter(x=>x.age>2 && x.age<=5);
    if(id==3)
    this.listPhone=this.listPhoneCopy.filter(x=>x.age>5)
    if(id==0)
    this.listPhone=this.listPhoneCopy;
  }
  filterName(name:string){
    console.log(name);
    this.listPhone=this.listPhoneCopy.filter(x=>x.name.match(name)||x.name.match(name.toUpperCase())||x.name.match(name.toLowerCase()));
  
  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }
  

}
