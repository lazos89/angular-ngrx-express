import { AuthActions } from "./action-types";
import { User } from "src/app/core/models/user.model";
import { createReducer, on, Action } from "@ngrx/store";

export const authFeatureKey = "auth";

export interface State {
  loading: boolean;
  error: string;
  user: User;
}

const initialState: State = {
  loading: false,
  error: null,
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: null
  })),
  on(AuthActions.login, (state, action) => ({
    ...state,
    loading: false,
    user: null,
    error: "Error Login"
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
