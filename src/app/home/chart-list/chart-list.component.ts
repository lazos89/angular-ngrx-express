import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { Data } from "src/app/core/models/data.model";
import * as fromRoot from "@root-store/reducer";
import { Store, select } from "@ngrx/store";
import { DataActions } from "@root-store/data";
import {
  selectSensorNames,
  selectDataAll,
  dataLoadingSelector
} from "../../root-store/data/data.selectors";
import { map } from "rxjs/operators";

@Component({
  selector: "app-chart-list",
  templateUrl: "./chart-list.component.html",
  styleUrls: ["./chart-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartListComponent implements OnInit {
  dataNames$: Observable<string[]>;
  data$: Observable<Data>;
  dataLoading$: Observable<boolean>;
  // dataNames: string[];
  constructor(private store$: Store<fromRoot.AppState>) {
    store$.pipe(select(selectDataAll)).subscribe(data => console.log("data"));

    this.dataNames$ = store$.pipe(select(selectSensorNames));
    store$.pipe(select(selectSensorNames)).subscribe(names => {
      if (names) {
        // console.log(names);
      }
    });
    this.data$ = store$.pipe(select(selectDataAll));
    this.dataLoading$ = this.store$.pipe(select(dataLoadingSelector));
  }

  ngOnInit(): void {}

  load() {
    this.store$.dispatch(DataActions.loadData());
  }

  public trackItem(index: number, sensor: Data) {
    return sensor.trackId;
  }
}
