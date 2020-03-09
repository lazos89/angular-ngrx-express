import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

import { routerReducer, RouterReducerState } from "@ngrx/router-store";
// import { StationState } from "./station";
import * as fromAuth from "../auth/store";
import * as fromData from "./data";
// import * as fromStation from "./station/station.reducer";
// import * as fromData from "./data/data.reducer";
// import * as fromDataParameters from "./data-parameters/data-parameters.reducer";

export interface AppState {
  auth: fromAuth.State;
  data: fromData.State;
  // station: fromStation.State;
  // data: fromData.State;
  // dataParameters: fromDataParameters.State;
  router: RouterReducerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  data: fromData.reducer,
  // station: fromStation.reducer,
  // data: fromData.reducer,
  // dataParameters: fromDataParameters.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
