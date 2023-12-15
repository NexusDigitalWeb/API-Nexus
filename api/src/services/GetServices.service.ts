import NotFoundException from "../errors/NotFoundException";
import ServicesModel from "../models/Services.models";

class GetServices {
  private collection;
  constructor() {
    this.collection = ServicesModel;
  }

  get = async () => {
    const findAllServices = await this.collection.find();

    if (findAllServices.length === 0)
      throw new NotFoundException("Services not found");
    return findAllServices;
  };
}

const getServices = new GetServices();
export default getServices;
