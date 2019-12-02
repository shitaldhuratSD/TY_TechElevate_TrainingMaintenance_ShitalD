import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class TserviceService {

  constructor(private http: HttpClient) { }


  url= 'http://localhost:8084/trainingmaintenance';
  

  batchdeatils(data) {
    return this.http.post(`${this.url}/batch`, data, headeroption);
  }
  
 
}
