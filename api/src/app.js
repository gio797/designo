import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import { getAllProjects } from "./controllers/project-controller.js";

dotenv.config();
connect();

const app = express();

app.use("/images", express.static("./public/images"));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works!" });
});

app.get("/api/projects", getAllProjects);

app.listen(3000, console.log("connected!"));
