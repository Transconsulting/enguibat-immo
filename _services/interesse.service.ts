import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteresseService {
  public API_URL = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public saveInteresse(id: any){
    return this.http.post(this.API_URL+'interese/save/'+ id, id);

  }
}
