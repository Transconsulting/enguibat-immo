import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TokenStorageService } from 'src/_services/token-storage.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
public TOKEN_HEADER_KEY = "Authorization"; // for Spring Boot back-end

  constructor(private token: TokenStorageService) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      let authReq = req;
      const token = this.token.getToken();
      if (token != null) {
        // for Spring Boot back-end
        authReq = req.clone({
          headers: req.headers.set(this.TOKEN_HEADER_KEY, "Bearer " + token),
        });
        req = req.clone({
          withCredentials: true,
        });
      }
      return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
];