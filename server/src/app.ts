import * as express from "express";
import { Application } from "express";

import * as compression from "compression"; // compresses requests
import * as bodyParser from "body-parser";
import { loginUser } from "./routes/auth";
// Controllers (route handlers)

// API keys and Passport configuration// Create Express server
const app: Application = express();

// Express configuration
app.set("port", process.env.PORT || 9000);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.route("/api/login").post(loginUser);

// app.route("/api/courses").get(getAllCourses);
// app.route("/api/course").post(createCourse);
// app.route("/api/course/:id").put(saveCourse);
// app.route("/api/course/:id").delete(deleteCourse);
// app.route("/api/courses/:courseUrl").get(getCourseByUrl);
// app.route("/api/lessons").get(searchLessons);

app.get("/", (req, res) => {
  res.send("angular ngrx  express example");
});
export default app;
