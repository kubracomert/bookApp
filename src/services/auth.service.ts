import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../app/models/authresponse";
import { tap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  signUp_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  signIn_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC_9WnMYVd07FbNo6nCt2BcsyIzOOnqvE";

  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.signUp_url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          this.handleAuthentication(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
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
          this.handleAuthentication(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
        })
      );
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem("user");
    this.router.navigate(["/auth"]);
  }

  autoLogin() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const authUser=new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpirationDate)
    )

    if (authUser.token) {
      this.user.next(authUser)
    }
  }

  handleAuthentication(
    email: string,
    userId: string,
    idToken: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);

    const user = new User(email, userId, idToken, expirationDate);
    this.user.next(user);

    localStorage.setItem("user", JSON.stringify(user));
  }
}
