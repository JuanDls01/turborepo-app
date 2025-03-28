import { Router } from "express";
import usersRouter from "./users.routes";

const mainRouter = Router();

mainRouter.use("/users", usersRouter);

export default mainRouter;
