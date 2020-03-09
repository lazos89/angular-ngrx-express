import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DataResolver } from "../core/resolvers/data.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent, resolve: [DataResolver] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
