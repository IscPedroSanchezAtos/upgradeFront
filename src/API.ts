import { StringMappingType } from "typescript";
import { shuffleArray } from "./utils";

export type Question ={
    category: StringMappingType;
    correct_answer: string;
    difficult: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[]};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",

}

export const fetchQuizQuestions =async (amount: number, difficulty: Difficulty) => {
    const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data= await (await fetch(endpoint)).json();
    return data.results.map((question: Question) =>(
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer,
            ]),
        }
    ));
};