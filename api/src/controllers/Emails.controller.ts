import { NextFunction, Request, Response } from "express";
import emailSender from "../services/SendEmail.service";
import contactUs from "../services/ContactUs.service";

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newEmail = await emailSender.send(req.body);
        return res.json({ message: 'Email sended', status: 0 });
    } catch (error) {
        next(error);
    }
};

export const contactUsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await contactUs.send(req.body);
        return res.json({ message: 'New email received', status: 0 });
    } catch (error) {
        next(error);
    }
}