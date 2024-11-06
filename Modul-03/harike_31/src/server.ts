import express, { Application } from "express";
import { PORT as port } from "./config/env.config";
import ErrorMiddleware from "./middleware/error.middleware";
import branchRouter from "./routes/branch.route";
// 33.10.1 Import authRouter
import authRouter from "./routes/auth.route";
import cors from "cors";

const PORT = Number(port) || 8000;

const app: Application = express();

// 33.46 Import dan gunakan cors
app.use(cors());
app.use(express.json());

app.use("/branch-management", branchRouter);

// harike_33 penambahan authentication and authorization
// 33.10.2 Pakai routernya. Jika penulisan seperti ini maka url nya adalah localhost:8080/login atau localhost:8080/register
// app.use(authRouter);

// 33.10.2 bisa juga menuliskan. Jika penulisan seperti ini maka urlnya adalah localhost:8080/auth-management/register atau localhost:8080/auth-management/login
app.use("/auth-management", authRouter);

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
