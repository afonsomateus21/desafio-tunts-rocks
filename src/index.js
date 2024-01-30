import { config } from "dotenv";
import express from "express";
import { createSituation } from "./controllers/SituationController.js";

const app = express();
config();

app.post('/', createSituation);

app.listen(8080, (request, response) => console.log('running on port:8080'));