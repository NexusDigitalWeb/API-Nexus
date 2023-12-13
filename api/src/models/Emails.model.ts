import mongoose from "mongoose";
import { Emails } from "../interfaces/Emails.interface";

const schema = new mongoose.Schema<Emails>(
  {
    from: {
      type: String,
      trim: true,
      required: true,
    },
    to: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
        type: String,
        trim: true,
        required: true
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const EmailsModel = mongoose.model("Emails", schema);
export default EmailsModel;
