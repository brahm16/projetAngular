import { HttpHeaders } from '@angular/common/http';

export const baseURL = 'http://localhost:3000/';
export const baseURLAuth = 'http://localhost:8000/auth';
export const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }