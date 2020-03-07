import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import { noop } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    // private auth: AuthService,
    private router: Router // private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["test@test.com", [Validators.required]],
      password: ["test", [Validators.required]]
    });
  }
  ngOnInit(): void {}
  login() {
    // const val = this.form.value;
    // this.auth
    //   .login(val.email, val.password)
    //   .pipe(
    //     tap(user => {
    //       console.log(user);
    //       this.store.dispatch(login({ user }));
    //       this.router.navigateByUrl("/courses");
    //     })
    //   )
    //   .subscribe(noop, () => alert("Login Failed"));
  }
}
