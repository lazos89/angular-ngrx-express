import { SummaryValues } from "./../../core/models/data.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromData from "./data.reducer";
import { Data } from "../../../../server/src/models/sensor";
import { calcMin, calcMax, calcAverage } from "src/app/core/utils/helpers";

export const selectDataState = createFeatureSelector<fromData.State>(
  fromData.dataFeatureKey
);

export const selectDataAll = createSelector(selectDataState, state => {
  return state.data;
});
export const selectSensorNames = createSelector(selectDataState, state =>
  Object.keys(state.data)
);

export const dataLoadingSelector = createSelector(
  selectDataState,
  state => state.loading
);
export const selectDataTable = () =>
  createSelector(selectDataAll, (data: Data, props: any) => data[props.sensor]);

export const selectSummaryData = () =>
  createSelector(selectDataAll, (data: Data, props: any) => {
    console.log(data[props.sensor]);
    const values = data[props.sensor].map(data => data[1]).slice(1) as number[];
    const dates = data[props.sensor].map(data => data[0]).slice(1) as string[];
    console.log(values);

    return {
      min: calcMin(values, dates),
      max: calcMax(values, dates),
      average: calcAverage(values, dates),
      last: {
        date: dates[dates.length - 1],
        value: values[values.length - 1]
      }
    } as SummaryValues;
  });
