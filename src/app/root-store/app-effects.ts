import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "../auth/store/auth.effects";

export const AppEffectsModules = EffectsModule.forRoot([AuthEffects]);
