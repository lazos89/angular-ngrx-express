import { SENSOR_DATA } from "./../data/sensor";
import { Request, Response } from "express";

export function getData(req: Request, res: Response) {
  console.log("Data Load Attempt ...");

  setTimeout(() => {
    console.log("Getting data...");
    res.status(200).json(SENSOR_DATA);
  }, 500);
}
