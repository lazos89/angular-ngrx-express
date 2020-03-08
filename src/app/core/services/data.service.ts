import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "../../../../server/src/models/sensor";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  loadDatas() {
    return this.http.post<Data>("/api/data", {});
  }
}
