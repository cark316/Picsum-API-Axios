import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(PORT, () => console.log(`App is listening to port ${PORT}`));