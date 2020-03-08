import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "../auth/store/auth.effects";
import { DataEffects } from "./data/data.effects";

export const AppEffectsModules = EffectsModule.forRoot([
  AuthEffects,
  DataEffects
]);
