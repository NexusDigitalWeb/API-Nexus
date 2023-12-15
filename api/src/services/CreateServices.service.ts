import BadRequestException from "../errors/BadRequestException";
import { Services } from "../interfaces/Services.interface";
import ServicesModel from "../models/Services.models";

class CreateServices {
    private collection;
    constructor() {
        this.collection = ServicesModel
    }

    private checkService = async (title: string) => {
        const exists = await this.collection.findOne({ title });
        return exists ? true : false;
    }

    public createNewService = async (body: Services) => {
        const { title, description, photo } = body;
        
        if ([title, description, photo].includes('')) throw new BadRequestException('Fields cannot be empty');
        if (await this.checkService(title)) throw new BadRequestException('Service already exists') 

        const response = {
            ...body
        };

        await this.collection.create(response);

        return response;
    }
};

const createServices = new CreateServices();
export default createServices;