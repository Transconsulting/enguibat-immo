import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  public API_URL = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public getCommune(): Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'commune');
  }

  public getCommuneByVille(id): Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'commune/listeByVille/'+ id);
  }
}
