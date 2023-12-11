import mongoose from "mongoose";
import { Services } from "../interfaces/Services.interface";

const schema = new mongoose.Schema<Services>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const ServicesModel = mongoose.model('Services', schema);
export default ServicesModel;