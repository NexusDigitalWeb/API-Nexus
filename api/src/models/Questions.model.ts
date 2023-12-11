import mongoose from "mongoose";
import questions from "../interfaces/Questions.interface";

const schema = new mongoose.Schema<questions>({
    question : {
        type: String,
        trim: true,
        required: true
    },
    response: {
        type: String,
        trim: true,
        required: true
    },
    
},{
    timestamps: false,
    versionKey: false
});

const QuestionsModel = mongoose.model('Questions', schema)

export default QuestionsModel
