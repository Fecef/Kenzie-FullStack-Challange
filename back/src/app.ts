import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";

import { errorHandler } from "./errors";
import * as route from "../src/routes";

const app = express();

app.use(express.json());

app.use("/user", route.userRouter);
app.use("/login", route.sessionRouter);

app.use(errorHandler)

export default app;