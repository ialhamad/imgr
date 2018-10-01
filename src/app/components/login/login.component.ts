import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  login(event: any) {
    event.preventDefault();
    let username = event.target.querySelector("#username").value;
    let password = event.target.querySelector("#password").value;
    if (this.auth.login(username, password)) {
      this.router.navigate(["/upload"]);
    }
  }
  ngOnInit() {}
}
