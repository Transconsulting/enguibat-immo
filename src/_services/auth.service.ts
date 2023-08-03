import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";
import { environment } from "src/environments/environment";
const AUTH_API = environment.url_backend + `/authenticate`;
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class AuthService {
public API_URL = environment.url_backend;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      // .post(AUTH_API, { username, password }, httpOptions)
      .post(this.API_URL+"authenticate", { username, password }, httpOptions)
      .toPromise()
      .then((res) => res);
  }

  register(user: User): Observable<any> {
    return this.http.post(
      this.API_URL+ "register",
      user,
      httpOptions
    );
  }
}
