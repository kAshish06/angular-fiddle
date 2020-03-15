import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private loggedInUser: string;
  constructor() {}

  public validateUserCredentials(user) {
    if (user.userName === "ashish" && user.password === "kumar") {
      this.loggedInUser = user.userName;
      return true;
    }
    return false;
  }

  public getUser() {
    return this.loggedInUser;
  }
}
