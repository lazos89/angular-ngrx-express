import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromData from "./data.reducer";
import { Data } from "../../../../server/src/models/sensor";

export const selectDataState = createFeatureSelector<fromData.State>(
  fromData.dataFeatureKey
);

export const selectDataAll = createSelector(selectDataState, state => {
  return state.data;
});
export const selectSensorNames = createSelector(
  selectDataState,
  state => state.sensors
);

export const dataLoadingSelector = createSelector(
  selectDataState,
  state => state.loading
);
export const selectDataTable = () =>
  createSelector(selectDataAll, (data: Data, props) => data[props.sensor]);
