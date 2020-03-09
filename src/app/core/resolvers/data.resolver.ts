import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { DataActions, selectDataAll } from "@root-store/data";
import * as fromRoot from "@root-store/reducer";
import { first, tap, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataResolver implements Resolve<any> {
  constructor(private store$: Store<fromRoot.AppState>) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store$.pipe(
      select(selectDataAll),
      tap(data => {
        if (!data) {
          this.store$.dispatch(DataActions.loadData());
        }
      }),
      filter(data => !!data),
      first()
    );
  }
}
