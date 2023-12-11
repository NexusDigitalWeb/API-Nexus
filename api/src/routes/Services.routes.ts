import { Router } from "express";
import { newService } from "../controllers/Service.controller";

const router = Router();

router.post('/new-service', newService);

export default router;