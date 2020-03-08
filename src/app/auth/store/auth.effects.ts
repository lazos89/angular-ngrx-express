import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, from, noop } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import * as AuthActions from "./auth.actions";
import { AuthService } from "../../core/services/auth.service";
import { Store } from "@ngrx/store";
import * as fromRoot from "@root-store/reducer";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(action =>
        this.authService.login(action.credentials).pipe(
          // tap(user => localStorage.setItem("user", JSON.stringify(user.email))),
          map(user => AuthActions.loginSuccess({ email: user.email })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );
  // logout$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.login),
  //       switchMap(action =>
  //         this.authService.login(action.credentials).pipe(
  //           tap(user =>
  //             localStorage.setItem("user", JSON.stringify(user.email))
  //           ),
  //           map(user => AuthActions.loginSuccess({ email: user.email })),
  //           catchError(error => of(AuthActions.loginFailure({ error })))
  //         )
  //       )
  //     ),
  //   { dispatch: false }
  // );
  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) // private store: Store<fromRoot.AppState>
  {}
}
