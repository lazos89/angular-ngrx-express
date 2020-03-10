import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-summary-box",
  templateUrl: "./summary-box.component.html",
  styleUrls: ["./summary-box.component.scss"]
})
export class SummaryBoxComponent implements OnInit {
  @Input() value: string;
  @Input() title: string;
  @Input() date: string;
  @Input() unit: string;
  @Input() icon: string;
  constructor() {}

  ngOnInit(): void {}
}
