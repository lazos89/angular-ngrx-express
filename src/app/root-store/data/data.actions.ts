import { createAction, props } from "@ngrx/store";
import { Data } from "../../../../server/src/models/sensor";

export const loadData = createAction("[Data] Load Data");

export const loadDataSuccess = createAction(
  "[Data] Load Data Succes",
  props<{ data: Data }>()
);

export const loadDataFailure = createAction(
  "[Data] Load Data Failure",
  props<{ error: string }>()
);
