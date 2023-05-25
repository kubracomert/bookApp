import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        let errorMsg;

        if (!navigator.onLine) {
          return throwError("İnternet bağlantınızı kontrol ediniz.");
        }
        if (response.error.error) {
          switch (response.error.error.message) {
            case "EMAIL_EXISTS":
              errorMsg = "Kullanılan bir email ile kayıt olamazsınız.";
              break;
            case "INVALID_PASSWORD":
              errorMsg = "Yanlış Parola";
              break;
            case "EMAIL_NOT_FOUND":
              errorMsg = "Kullanıcı bulunamadı.";
              break;
            default:
              errorMsg = "Bir hata ile karşılaşıldı";
              break;
          }
        }

        return throwError(errorMsg);
      })
    );
  }
}
