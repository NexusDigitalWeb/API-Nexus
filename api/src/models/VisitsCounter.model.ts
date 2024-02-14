import mongoose from "mongoose";
import VisitsCounterTypes from "../interfaces/VisitsCounter.interface";

const schema = new mongoose.Schema<VisitsCounterTypes>(
  {
    new_visit: {
      type: Number,
      trim: true,
      default: 1
    },
    total_visits: {
      type: Number,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const VisitsModel = mongoose.model('Visits', schema);
export default VisitsModel;