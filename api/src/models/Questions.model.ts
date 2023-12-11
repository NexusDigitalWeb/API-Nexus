import mongoose from "mongoose";
import questions from "../interfaces/Questions.interface";

const schema = new mongoose.Schema<questions>({
    question : {
        type: String,
        trim: true,
        required: true
    },
    respones: {
        type: String,
        trim: true,
        required: true
    },
    
},{
    timestamps: true,
    versionKey: true
});

const QuestionsModel = mongoose.model('Questions', schema)

export default QuestionsModel
