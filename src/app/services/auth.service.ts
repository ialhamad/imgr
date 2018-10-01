import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private users: UsersService) {}
  login(username, password): boolean {
    let usersTable = localStorage.getItem(this.users.usersTableName);
    if (usersTable) {
      let user = JSON.parse(usersTable).find(
        user => user.username === username
      );
      if (user && user.password === password) {
        localStorage.setItem("currentUser", user.username);
        return true;
      }
    }
    return false;
  }
  get isLoggedIn(): boolean {
    return localStorage.getItem("currentUser") ? true : false;
  }
}
