import { Router, Request, Response } from "express";
import { getAllUsers } from "@services/users.services";

const usersRouter = Router();

usersRouter.use("/", (req: Request, res: Response) => {
  const users = getAllUsers();
  res.send({ users });
});

export default usersRouter;
