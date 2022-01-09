import { types } from "../types/types";

const initialState = {
    questions:[],
    answers: [],
    score: {
        points: 0,
        nQuestions: 10
    }
}
export const gameReducer = (state = initialState , action:any) => {
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
            };
        
        case types.addPoint:
            return {
                ...state,
                score: {
                    ...state.score,
                    points: state.score.points + action.payload,
                }
            };
        
        case types.resetPoints:
            return {
                ...state,
                score: {
                    ...state.score,
                    points:0,
                }
            };
        default:
            return state;
    }
}

