import express, { Express, Request, Response } from "express";
import cors from "cors";
import mainRouter from "./routes";

const app: Express = express();
const port = 3001;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(mainRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
