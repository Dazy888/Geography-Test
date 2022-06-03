import {AppStateType} from "./Redux-Store";

export function getQuestions(state: AppStateType) {
    return state.questions
}

export function getAnswers(state: AppStateType) {
    return state.answers
}

export function getGrades(state: AppStateType) {
    return state.grades
}

export function getUserAnswers(state: AppStateType) {
    return state.userAnswers
}

export function getChosenStatus(state: AppStateType) {
    return state.isChosenAnswer
}

export function getPhotographs(state: AppStateType) {
    return state.photographs
}

export function getTrueAnswers(state: AppStateType) {
    return state.trueAnswers
}

export function getWastedTime(state: AppStateType) {
    return state.wastedTime
}

export function getAverageAnswerTime(state: AppStateType) {
    return state.averageAnswerTime
}