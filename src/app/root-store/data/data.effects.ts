import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { DataActions } from "./action-types";
import { DataService } from "../../core/services/data.service";

@Injectable()
export class DataEffects {
  loadDatas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataActions.loadData),
      concatMap(() =>
        this.dataService.loadDatas().pipe(
          map(data => DataActions.loadDataSuccess({ data })),
          catchError(error => of(DataActions.loadDataFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private dataService: DataService) {}
}
