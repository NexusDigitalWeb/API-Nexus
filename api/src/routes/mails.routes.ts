import { Router } from "express";
import { sendEmail } from "../controllers/Emails.controller";

const router = Router();

router.post('/send-email', sendEmail);

export default router;