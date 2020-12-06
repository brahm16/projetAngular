import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Phone } from '../../models/phone';
import { baseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  static phone:Phone;
  p: BehaviorSubject<Phone>;

  getPhone(): Phone{
    return PhoneService.phone;
  }
  setPhone(phone: Phone){
    PhoneService.phone=phone;
  } 
  addPhone(phone: Phone): Observable<Phone>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
   return this.http.post<Phone>(baseURL+'phones',phone,httpOptions);

  }
  deletePhone (phone: Phone | number): Observable<Phone> {
    const id = typeof phone === 'number' ? phone : phone.id;
    return this.http.delete<Phone>(baseURL+'phones/'+id);
    }
    updatePhone (id: number|string, phone: Phone): Observable<Phone> {
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      };
      return this.http.put<Phone>(baseURL+'phones/'+ id, phone,httpOptions);
      }
  uploadImage(source: any){
    
    return this.http.get('http://localhost:8081/SpringMVC/servlet/copyimage/'+source).subscribe((res)=>{
      console.log(res);
    });

  }

  getPhones(): Observable<Phone[]>{
    return this.http.get<Phone[]>(baseURL+'phones');
  }
  getPhoneById(id: string|number):  Observable<Phone>{
    return this.http.get<Phone>(baseURL+'phones/'+id);
  }
  nextPhone(phone: Phone){
    this.p.next(phone);
  }

  constructor(private http: HttpClient ) { 
    this.p=new BehaviorSubject(this.getPhone());

  }
}
