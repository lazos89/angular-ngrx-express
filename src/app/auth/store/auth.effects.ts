import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { AuthActions } from "./action-types";
import { AuthService } from "../../core/services/auth.service";

Injectable();
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        switchMap(action =>
          this.authService.login(action.credentials).pipe(
            tap(user =>
              localStorage.setItem("user", JSON.stringify(user.email))
            ),
            map(user => AuthActions.loginSuccess({ email: user.email })),
            catchError(error => of(AuthActions.loginFailure({ error })))
          )
        )
      ),
    { dispatch: false }
  );
  // login$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AuthAction.login),
  //     switchMap(() =>
  //       apiSource.pipe(
  //         map(data => AuthActions.actionSuccess({ data })),
  //         catchError(error => of(AuthAction.actionFailure({ error })))
  //       )
  //     )
  //   );
  // });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
