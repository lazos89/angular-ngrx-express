import { Action, createReducer, on } from "@ngrx/store";
import * as DataActions from "./data.actions";
import { Data } from "../../../../server/src/models/sensor";

export const dataFeatureKey = "data";

export interface State {
  loading: boolean;
  error: string;
  data: Data;
  sensors: string[];
}

export const initialState: State = {
  loading: false,
  error: null,
  data: null,
  sensors: null
};

const dataReducer = createReducer(
  initialState,
  on(DataActions.loadData, state => ({
    ...state,
    loading: true,
    error: null
    // data: {}
  })),
  on(DataActions.loadDataSuccess, (state, action) => {
    // console.log(action.data);
    return {
      ...state,
      data: {
        ...Object.assign({}),
        // ...action.data
        ...Object.keys(action.data).reduce(
          (acc, curr) => ({ ...acc, [curr]: action.data[curr] }),
          {}
        )
      },
      loading: false,
      sensors: Array.from(Object.keys(action.data))
    };
  }),
  on(DataActions.loadDataFailure, state => ({
    ...state,
    loading: false,
    error: "Error Loading Data"
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return dataReducer(state, action);
}
