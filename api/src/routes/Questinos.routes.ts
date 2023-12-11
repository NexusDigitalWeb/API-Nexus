import { Router } from "express";
import { addQuestion, getQuestions } from "../controllers/Question.controller";

const route = Router();

route.post("/new-question", addQuestion)
route.get("/", getQuestions)

export default route