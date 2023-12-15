import { NextFunction, Request, Response } from "express";
import createServices from "../services/CreateServices.service";
import getServices from "../services/GetServices.service";

export const newService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newServiceCreated = await createServices.createNewService(req.body);
        return res.status(201).json({ message: 'New service created', service: newServiceCreated, status: 0 });
    } catch (error) {
        next(error);
    }
}

export const getAllServices = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const services = await getServices.get();
        return res.json({ message: 'OK', services, status: 0 });
    } catch (error) {
        next(error);
    }
};