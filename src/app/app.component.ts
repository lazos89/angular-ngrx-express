import { authLoadingSelector } from "./auth/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import * as fromRoot from "@root-store/reducer";
import { Store, select } from "@ngrx/store";
import { isLoggedIn } from "./auth/store/auth.selectors";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-ngrx-express";
  loading = false;
  isLoggedIn$: Observable<boolean>;
  // logginIn: Observable<boolean>;,
  constructor(
    private router: Router,
    private store$: Store<fromRoot.AppState>
  ) {
    this.isLoggedIn$ = store$.pipe(select(isLoggedIn));
    store$
      .pipe(select(authLoadingSelector))
      .subscribe(loading => (this.loading = loading));
  }

  onSignOut() {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
