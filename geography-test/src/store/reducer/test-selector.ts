import { AppStateType } from "@/store/store"

type SelectorStringFunc = (state: AppStateType) => string
type SelectorNumberFunc = (state: AppStateType) => number
type SelectorStringArrFunc = (state: AppStateType) => string[]
type SelectorBooleanArrFunc = (state: AppStateType) => boolean[]

export const getQuestion: SelectorStringFunc = (state)  => state.test.questions[state.test.currentQuestion]
export const getQuestions: SelectorStringArrFunc = (state)  => state.test.questions
export const getImage: SelectorStringFunc = (state) => state.test.images[state.test.currentQuestion]
export const getAnswers: SelectorStringArrFunc = (state) => state.test.answers[state.test.currentQuestion]
export const getTrueAnswers: SelectorStringArrFunc = (state) => state.test.trueAnswers
export const getUserAnswers: SelectorStringArrFunc = (state) => state.test.userAnswers
export const getAllAnswers: (state: AppStateType) => string[][] = (state) => state.test.answers
export const getUserAnswer: SelectorStringFunc = (state) => state.test.userAnswer
export const getPassedQuestions: SelectorBooleanArrFunc = (state) => state.test.passedQuestions
export const getCurrentQuestion: SelectorNumberFunc = (state) => state.test.currentQuestion
export const getWastedTime: SelectorNumberFunc = (state) => state.test.wastedTime
export const getAverageAnswerTime: SelectorNumberFunc = (state) => state.test.wastedTime / 10
export const getGrades: (state: AppStateType) => number | any = (state) => {
    if (state.test.userAnswers) {
        let grades = 0
        for (let i = 0; i < 11; i++) if (state.test.trueAnswers[i] === state.test.userAnswers[i]) grades++
        return grades
    }
}
export const getCircleR: SelectorNumberFunc = (state) => state.test.circleR