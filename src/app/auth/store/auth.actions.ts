import { createAction, props } from "@ngrx/store";
import { LoginCredentials } from "src/app/core/models/user.model";
import { User } from "../../core/models/user.model";

export const login = createAction(
  "[Auth] User Login",
  props<{ credentials: LoginCredentials }>()
);

export const loginSuccess = createAction(
  "[Auth] Login Success",
  props<{ user: User }>()
);

export const loginFailure = createAction(
  "[Auth] Login Failure",
  props<{ error: string }>()
);
