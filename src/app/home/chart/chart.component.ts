import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from "@angular/core";
import { GoogleChartInterface } from "ng2-google-charts/google-charts-interfaces";
import {
  ChartReadyEvent,
  ChartErrorEvent,
  ChartSelectEvent
} from "ng2-google-charts";
// import { GoogleChartInterface } from "src/app/shared/google-charts/google-charts-interface";
import { Data } from "../../../../server/src/models/sensor";
import { Store, select } from "@ngrx/store";
import { selectDataAll } from "@root-store/data/data.selectors";
import * as fromRoot from "@root-store/reducer";
import { from } from "rxjs";
import { selectDataTable } from "../../root-store/data/data.selectors";
import { map } from "rxjs/operators";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input() sensor: string;
  dataTable$: Observable<GoogleChartInterface>;

  constructor(private store$: Store<fromRoot.AppState>) {}

  chart: GoogleChartInterface;
  count: number = 0;
  selectEvent: ChartSelectEvent;
  updateChart(data: (string | number)[][] = [[]], title: string = "") {
    return {
      chartType: "LineChart",
      dataTable: data,
      options: {
        title: title,
        legend: "none",
        width: "100%",
        chartArea: {}
        // backgroundColor: { fill: "transparent" }
      }
    };
  }

  ngOnInit(): void {
    this.dataTable$ = this.store$.pipe(
      select(selectDataTable(), { sensor: this.sensor }),
      map(data => this.updateChart(data, this.sensor))
    );
  }

  ready(event: ChartReadyEvent) {
    // console.log(event.message);
  }

  error(event: ChartErrorEvent) {
    console.error("Error: " + event);
  }

  select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }
}
