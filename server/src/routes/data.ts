import { Request, Response } from "express";
import * as sensor1 from "./../data/sensors1.json";
import * as sensor2 from "./../data/sensors2.json";
import * as sensor3 from "./../data/sensors3.json";

export function getData(req: Request, res: Response) {
  console.log("Data Load Attempt ...");

  setTimeout(() => {
    console.log("Getting data...");
    const rand = Math.random();
    if (rand < 0.33) {
      console.log("sensor 1");
      res.status(200).json(sensor1);
    } else if (rand > 0.33 && rand < 0.66) {
      console.log("sensor 2");
      res.status(200).json(sensor2);
    } else {
      console.log("sensor 3");
      res.status(200).json(sensor3);
    }
  }, 3000);
}
