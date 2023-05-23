import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/authresponse";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
  providers: [AuthService],
})
export class AuthComponent implements OnInit {
  isRegister: boolean = false;
  loader: boolean = false;
  error: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  toogle() {
    this.isRegister = !this.isRegister;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.loader = true;
    const email = form.value.email;
    const password = form.value.password;
    let authresponse: Observable<AuthResponse>;
    if (this.isRegister) {
      authresponse = this.authService.signUp(email, password);
    } else {
      authresponse = this.authService.signIn(email, password);
    }

    authresponse.subscribe(
      (response) => {
        this.loader = false;
        console.log(response);
      },
      (error) => {
        this.error = error;
        this.loader = false;
      }
    );
    form.reset();
  }
}
