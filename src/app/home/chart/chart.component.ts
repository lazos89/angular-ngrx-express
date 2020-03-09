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

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input() data: Array<Array<number | string>>;

  chart: GoogleChartInterface = {
    chartType: "LineChart",
    dataTable: [],
    options: {
      title: "",
      legend: "none",
      width: "100%",
      chartArea: {}
      // backgroundColor: { fill: "transparent" }
    }
  };
  selectEvent: ChartSelectEvent;

  ngOnInit(): void {
    this.chart.dataTable = this.data;
    this.chart.options["title"] = this.data[0][1];
    // throw new Error("Method not implemented.");
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
