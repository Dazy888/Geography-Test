import {AppStateType} from "./Redux-Store";

export function getQuestions(state: AppStateType) {
    return state.questions
}

export function getAnswers(state: AppStateType) {
    return state.answers
}

export function getGrades(state: AppStateType) {
    return state.userGrades
}

export function getUserAnswers(state: AppStateType) {
    return state.userAnswers
}

export function getChosenStatus(state: AppStateType) {
    return state.isChosen
}