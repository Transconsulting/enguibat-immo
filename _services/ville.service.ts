import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  public API_URL = "http://localhost:8080/";

  constructor(private http: HttpClient) { }


  public getVilles(): Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'ville');
  }
}
