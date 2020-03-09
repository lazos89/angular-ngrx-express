import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ChartComponent } from "./chart/chart.component";
import { ChartListComponent } from "./chart-list/chart-list.component";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [HomeComponent, ChartComponent, ChartListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2GoogleChartsModule,
    MaterialModule
  ]
})
export class HomeModule {}
