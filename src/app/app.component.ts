import { authLoadingSelector } from "./auth/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import * as fromRoot from "@root-store/reducer";
import { Store, select } from "@ngrx/store";
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
  // logginIn: Observable<boolean>;,
  constructor(
    private router: Router,
    private store$: Store<fromRoot.AppState>
  ) {
    store$
      .pipe(select(authLoadingSelector))
      .subscribe(loading => (this.loading = loading));
  }
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
