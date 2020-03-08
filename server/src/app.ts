import * as express from "express";
import { Application } from "express";

import * as compression from "compression"; // compresses requests
import * as bodyParser from "body-parser";
import { loginUser } from "./routes/auth";
import { getData } from "./routes/data";
// Controllers (route handlers)

// API keys and Passport configuration// Create Express server
const app: Application = express();

// Express configuration
app.set("port", process.env.PORT || 9000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.route("/api/login").post(loginUser);

app.route("/api/data").get(getData);

app.get("/", (req, res) => {
  res.send("angular ngrx  express example");
});
export default app;
