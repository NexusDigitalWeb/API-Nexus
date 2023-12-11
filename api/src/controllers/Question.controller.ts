import { NextFunction, Request, Response } from "express";
import createQuestion from "../services/CreateQuestions.service";
import questions from "../interfaces/Questions.interface";


const addQuestion = async (req: Request,res: Response, next: NextFunction ) => {
    try {
        const question = await createQuestion.addQuestion(req.body)

        return res.status(201).json({message: "Question created", question, status: 0})
    } catch (error) {
        next(error)
    }
}

const getQuestions = async (req: Request,res: Response, next: NextFunction ) =>{
    try {
        const question = await createQuestion.getQuestions();
        return res.status(201).json({question})
    } catch (error) {
        next(error)
    }
}


export{
    addQuestion,
    getQuestions
}