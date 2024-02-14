import { NextFunction, Request, Response, Router } from "express";
import servicesRouter from "./Services.routes";
import questionRouter from "./Questinos.routes";
import errorHandler from "../middlewares/errorHandler.middlewares";
import mailsRouter from "./mails.routes";
import getNewVisit from "../services/GetNewVisit.service";

const routes = Router();

routes.use("/services", servicesRouter);
routes.use("/questions", questionRouter);
routes.use("/emails", mailsRouter);

routes.use(errorHandler);

routes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const totalVisits = await getNewVisit.getNewVisit(); 
    res.json({ totalVisits, status: 0 })
  } catch (error) {
    next(error)
  }
});
routes.get("*", (req: Request, res: Response) =>
  res
    .status(404)
    .json({ error: { message: `Route ${req.url} not found`, status: 1 } })
);

export default routes;
