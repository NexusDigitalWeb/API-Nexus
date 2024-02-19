import { Router } from "express";
import { contactUsController, sendEmail } from "../controllers/Emails.controller";

const router = Router();

router.post('/send-email', sendEmail);
router.post('/contactUs', contactUsController);

export default router;