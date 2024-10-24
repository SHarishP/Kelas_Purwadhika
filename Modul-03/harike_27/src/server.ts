import express, { Application } from "express";

import { PORT as port } from "./config/envConfig";

import trackRouter from "./routes/tracker.routes";
import errorMiddleware from "./middleware/err.middleware";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/api", trackRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
