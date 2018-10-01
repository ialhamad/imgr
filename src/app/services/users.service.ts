import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private tableName: string = "users";
  private usersArray = localStorage.getItem(this.tableName)
    ? JSON.parse(localStorage.getItem(this.tableName))
    : [];

  create(user): boolean {
    this.usersArray.push(user);
    return this.saveUser();
  }
  private saveUser(): boolean {
    localStorage.setItem(this.tableName, JSON.stringify(this.usersArray));
    return true;
  }

  public get usersTableName(): string {
    return this.tableName;
  }

  constructor() {}
}
