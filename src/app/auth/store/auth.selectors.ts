import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUser = createSelector(selectAuthState, state => state.user);

export const isLoggedIn = createSelector(
  selectAuthState,
  state => !!state.user
);

export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn);

export const authLoadingSelector = createSelector(
  selectAuthState,
  state => state.loading
);
