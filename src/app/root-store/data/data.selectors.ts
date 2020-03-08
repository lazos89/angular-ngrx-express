import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromData from "./data.reducer";

export const selectDataState = createFeatureSelector<fromData.State>(
  fromData.dataFeatureKey
);

export const selectDataAll = createSelector(
  selectDataState,
  state => state.data
);
