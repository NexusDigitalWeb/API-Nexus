import { Request, Response, Router } from "express";
import servicesRouter from "./Services.routes";
import questionRouter from "./Questinos.routes";
import errorHandler from "../middlewares/errorHandler.middlewares";
import mailsRouter from "./mails.routes";

const routes = Router();

routes.use("/services", servicesRouter);
routes.use("/questions", questionRouter);
routes.use("/emails", mailsRouter);

routes.use(errorHandler);

routes.get("/", (req: Request, res: Response) =>
  res.json({ message: "API in development", status: 0 })
);
routes.get("*", (req: Request, res: Response) =>
  res
    .status(404)
    .json({ error: { message: `Route ${req.url} not found`, status: 1 } })
);

export default routes;
