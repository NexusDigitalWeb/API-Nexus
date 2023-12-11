import QuestionsModel from "../models/Questions.model"
import questions from "../interfaces/Questions.interface"
import BadRequestException from "../errors/BadRequestException"

class CreateQuestions {
    private collection
    constructor(){
        this.collection = QuestionsModel
    }

    public addQuestion = async (body: questions) => {
        const {question, response} = body

        const quest = await this.collection.findOne({question})

        if (quest) throw new BadRequestException('Service already exists') 
        if ([question, response].includes('')) throw new BadRequestException('Fields cannot be empty')

        this.collection.create({question, response})

        return {question, response}
    }

    public getQuestions = async() =>{
        const questions = await this.collection.find();

        if(!questions) throw new BadRequestException('No questions');

        return questions
    }

}

const createQuestion = new CreateQuestions();
export default createQuestion