import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import { noop, combineLatest, Observable } from "rxjs";
import { Router } from "@angular/router";
import * as fromRoot from "@root-store/reducer";
import { Store, select } from "@ngrx/store";
import { tap, map } from "rxjs/operators";
import { AuthActions, authLoadingSelector } from "../store";
import { LoginCredentials } from "../../core/models/user.model";
import { dataLoadingSelector } from "../../root-store/data/data.selectors";
interface Form {
  email: string;
  password: string;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroupTyped<Form>;
  isLoading$: Observable<boolean>;
  authLoading$: Observable<boolean>;
  dataLoading$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private store$: Store<fromRoot.AppState>
  ) {
    this.form = fb.group({
      email: ["test@test.com", [Validators.required]],
      password: ["test", [Validators.required]]
    }) as FormGroupTyped<Form>;
    this.authLoading$ = this.store$.pipe(select(authLoadingSelector));
    this.dataLoading$ = this.store$.pipe(select(dataLoadingSelector));

    this.isLoading$ = combineLatest(
      this.authLoading$,
      this.dataLoading$,
      (login, data) => login || data
    );
    // .subscribe(loading => {
    //   console.log(this.isLoading);
    //   return (this.isLoading = loading);
    // });
  }
  ngOnInit(): void {}
  login() {
    const formValues = this.form.value;
    this.store$.dispatch(
      AuthActions.login({
        credentials: {
          email: formValues.email,
          password: formValues.password
        }
      })
    );
    // .subscribe(noop, () => alert("Login Failed"));
  }
}
