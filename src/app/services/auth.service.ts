import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../models/authresponse";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  signUp_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  signIn_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signUp_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signIn_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg;

    if (!navigator.onLine) {
      return throwError("İnternet bağlantınızı kontrol ediniz.");
    }

    if (error.error.error) {
      switch (error.error.error.message) {
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
  }
}
