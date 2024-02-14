import BadRequestException from "../errors/BadRequestException";
import VisitsModel from "../models/VisitsCounter.model";

class GetNewVisit {
  private collection;
  constructor() {
    this.collection = VisitsModel;
  }

  private getTotalVisits = async () => {
    // Buscar el primer documento en la colección
    let totalVisits = await this.collection.findOne();

    // Si no hay documentos en la colección, crear uno nuevo
    if (!totalVisits) {
      totalVisits = await this.collection.create({ total_visits: 0 });
    }

    return totalVisits;
  };

  public getNewVisit = async () => {
    let totalVisits = await this.getTotalVisits();

    totalVisits.total_visits += 1;
    await totalVisits.save();

    return totalVisits;
  };
}

const getNewVisit = new GetNewVisit();
export default getNewVisit;
