import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteresseService {
  public API_URL = environment.url_backend;

  constructor(private http: HttpClient) { }

  public saveInteresse(id: any){
    return this.http.post(this.API_URL+'interese/save/'+ id, id);

  }
}
