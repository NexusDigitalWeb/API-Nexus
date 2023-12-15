import { Router } from "express";
import { getAllServices, newService } from "../controllers/Service.controller";

const router = Router();

router.post('/new-service', newService);

router.get('/', getAllServices);

export default router;