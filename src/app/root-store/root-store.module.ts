import { NgModule } from "@angular/core";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { AppEffectsModules } from "./app-effects";
import { metaReducers, appReducers } from "./reducer";
import { EffectsModule } from "@ngrx/effects";

import * as fromData from "./data/data.reducer";

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    AppEffectsModules,
    StoreRouterConnectingModule.forRoot({
      stateKey: "router",
      routerState: RouterState.Minimal
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      : [],
    StoreModule.forFeature(fromData.dataFeatureKey, fromData.reducer)
  ]
})
export class RootStoreModule {}
