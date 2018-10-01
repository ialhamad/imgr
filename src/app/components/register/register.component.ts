import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private users: UsersService, private router: Router) {}

  register(event) {
    let user = {
      username: event.target.querySelector("#username").value,
      email: event.target.querySelector("#email").value,
      password: event.target.querySelector("#password").value
    };
    if (this.users.create(user)) {
      this.router.navigate(["/login"]);
    }
  }
  ngOnInit() {}
}
