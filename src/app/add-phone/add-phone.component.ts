import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../../models/phone';
import { PhoneService } from '../shared/phone.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  phone:Phone;
  fg:FormGroup;
  selectedFile=null;
  saved:boolean=false;


  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phone=new Phone();
    this.fg=new FormGroup({
      quantity:new FormControl(0,[Validators.required]),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      age:new FormControl(0,[Validators.required]),
      snippet: new FormControl('',[Validators.required, Validators.minLength(3)]),
      android: new FormGroup({
        os: new FormControl('', Validators.required),
        ui: new FormControl('', Validators.required)

      })
  })
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
  cancel(){
    this.fg.reset();
  }
  save(){
    console.log(this.fg.value);
    console.log(this.phone);
    let p=new Phone();
    Object.assign(p, this.fg.value);


    this.phone = <Phone> this.fg.value;
    console.log(this.phone); 
    this.phone.imageUrl="phones/"+this.selectedFile.name;
    console.log(this.selectedFile);

    this.phoneService.addPhone(this.phone).subscribe((phone)=>{
      this.phone=phone;
      this.saved=true;
      this.onUpload();
      this.fg.reset();
    });
    

  //  
    console.log(this.phone); 
   }
    onFileSelected(event){
      console.log(event);
      this.selectedFile=<File>event.target.files[0];


    }
    onUpload(){
     
      this.phoneService.uploadImage(this.selectedFile.name);

    }


}
