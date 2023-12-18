import { Router } from "express";
import { getAllServices, getServiceById, newService } from "../controllers/Service.controller";

const router = Router();

router.post('/new-service', newService);

router.get('/', getAllServices);
router.get('/:id', getServiceById);

export default router;