import { types } from "../types/types"


export const refrescarPreguntas = (event: any) => ({
    type: types.refreshQuestions,
    payload:event
});

export const addAnswer = (event:any) => ({
    type: types.addAnswer,
    payload:event
});

export const resetAnswers = (event:any) => ({
    type: types.resetAnswers,
    payload:event
});

export const setAllAnswers = (event:any) => ({
    type: types.setAllAnswers,
    payload:event
})