import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromRoot from "@root-store/reducer";
import { isLoggedIn } from "../../auth/store/auth.selectors";
import { map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store$.pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        console.log(loggedIn);
        if (!loggedIn) {
          this.router.navigate(["/"]);
        }
      })
    );
  }
  constructor(
    private store$: Store<fromRoot.AppState>,
    private router: Router
  ) {}
}
