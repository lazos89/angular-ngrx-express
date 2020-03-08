import { LoginCredentials } from "./../models/user.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<User> {
    const creds = { email: credentials.email, password: credentials.password };
    return this.http.post<User>("/api/login", {
      email: creds.email,
      password: creds.password
    });
  }
}
