import { types } from "../types/types";

const initialState = {
    questions:[],
    answers: []
}
export const questionsReducer = (state = initialState , action:any) => {
    switch (action.type) {
        case types.refreshQuestions:
            return {
                ...state,
                questions: [...action.payload]
            }
        
        case types.addAnswer:
            return {
                ...state,
                answers: [...state.answers, action.payload]
            }
        case types.resetAnswers:
            return {
                ...state,
                answers: initialState.answers
            }  
        
        case types.setAllAnswers:
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state;
    }
}

