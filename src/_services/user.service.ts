import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from 'src/environments/environment';

// const API_URL = "http://localhost:8080/api/test/";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public API_URL = environment.url_backend;
  constructor(private http: HttpClient) {}
  behavior = new BehaviorSubject<boolean>(false)
    public connected = this.behavior.asObservable()

  getUserByEmail(email: any): Observable<any> {
    return this.http.get(this.API_URL + "utilisateurEmail/"+ email);
  }

  // getUsezrByEmail(): Observable<any> {
  //   return this.http.get(API_URL + "all", { responseType: "text" });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + "user", { responseType: "text" });
  // }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + "mod", { responseType: "text" });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + "admin", { responseType: "text" });
  // }
}
