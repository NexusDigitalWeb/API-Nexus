import mongoose from "mongoose";
import { ContactUsDB } from "../interfaces/Emails.interface";

const schema = new mongoose.Schema<ContactUsDB>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    subject: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 60,
    },
    message: {
      type: String,
      trim: true,
      required: true,
      min: 3,
    },
    status: {
        type: String,
        trim: true,
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const ContactUsModel = mongoose.model('contactUs', schema);
export default ContactUsModel;