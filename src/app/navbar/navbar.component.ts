import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
