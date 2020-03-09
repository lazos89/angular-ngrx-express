import { Component, OnInit, Input } from "@angular/core";
import { Data } from "src/app/core/models/data.model";
import * as fromRoot from "@root-store/reducer";
import { Store, select } from "@ngrx/store";
import {
  selectSensorNames,
  selectDataAll
} from "../../root-store/data/data.selectors";

@Component({
  selector: "app-chart-list",
  templateUrl: "./chart-list.component.html",
  styleUrls: ["./chart-list.component.scss"]
})
export class ChartListComponent implements OnInit {
  dataNames$: Observable<string[]>;
  data$: Observable<Data>;
  constructor(private store$: Store<fromRoot.AppState>) {
    this.dataNames$ = store$.pipe(select(selectSensorNames));
    this.data$ = store$.pipe(select(selectDataAll));
    // store$.pipe(select(selectDataAll)).subscribe(d => console.log(d));
  }

  ngOnInit(): void {}
}
