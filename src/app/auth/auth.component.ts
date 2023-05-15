import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  isRegister: boolean = false;

  constructor() {}

  ngOnInit() {}

  toogle() {
    this.isRegister = !this.isRegister;
  }

  onSubmit(form: NgForm) {
    console.log(form,"kkjkjkj");
  }
}
