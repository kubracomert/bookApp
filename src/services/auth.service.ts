import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../app/models/authresponse";
import { tap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  signUp_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  signIn_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signUp_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const expirationDate = new Date(
            new Date().getTime() + +res.expiresIn * 1000
          );

          const user = new User(
            res.email,
            res.localId,
            res.idToken,
            expirationDate
          );
          this.user.next(user);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signIn_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const expirationDate = new Date(
            new Date().getTime() + +res.expiresIn * 1000
          );
          const usertemp = new User(
            res.email,
            res.localId,
            res.idToken,
            expirationDate
          );
          this.user.next(usertemp);
        })
      );
  }
}
