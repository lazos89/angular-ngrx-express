import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as fromRoot from "@root-store/reducer";
import { SummaryValues } from "../../core/models/data.model";
import { selectSummaryData } from "../../root-store/data/data.selectors";

@Component({
  selector: "app-info-summary",
  templateUrl: "./info-summary.component.html",
  styleUrls: ["./info-summary.component.scss"]
})
export class InfoSummaryComponent implements OnInit {
  @Input() sensor: string;

  summaryValues$: Observable<SummaryValues>;

  constructor(private store$: Store<fromRoot.AppState>) {}

  ngOnInit(): void {
    this.store$
      .pipe(select(selectSummaryData(), { sensor: this.sensor }))
      .subscribe(() => {});
  }
}
