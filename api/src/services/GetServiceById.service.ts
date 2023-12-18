import BadRequestException from "../errors/BadRequestException";
import NotFoundException from "../errors/NotFoundException";
import ServicesModel from "../models/Services.models";

class GetService {
    private collection;
    constructor() {
        this.collection = ServicesModel
    }

    private checkService = async (id: string) => {
        const exists = await ServicesModel.findOne({ _id: id });
        return exists;
    };

    public get = async (id: string) => {
        if (!/^[0-9a-fA-F]{24}$/.test(id)) throw new BadRequestException('Invalid ID format');

        const service = await ServicesModel.findOne({ _id: id });

        if (!service) throw new NotFoundException('Service not found');
        
        return service;
    };
}

const getService = new GetService()
export default getService;