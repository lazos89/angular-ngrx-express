import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import * as fromRoot from "@root-store/reducer";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { AuthActions } from "../store";
import { LoginCredentials } from "../../core/models/user.model";
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
  constructor(
    private fb: FormBuilder,
    private store$: Store<fromRoot.AppState>
  ) {
    this.form = fb.group({
      email: ["test@test.com", [Validators.required]],
      password: ["test", [Validators.required]]
    }) as FormGroupTyped<Form>;
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
