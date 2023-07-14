import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TestState {
    userAnswer: string
    userAnswers: string[]
    wastedTime: number
    currentQuestion: number
    passedQuestions: boolean[]
    circleR: number
    finishedTest: boolean
}

let initialState: TestState = {
    userAnswer: '',
    userAnswers: [],
    wastedTime: 0,
    currentQuestion: 0,
    passedQuestions: [],
    circleR: 60,
    finishedTest: false
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addUserAnswer(state, action: PayloadAction<string>) {
            state.userAnswers = [...state.userAnswers, action.payload]
        },
        resetUserAnswers(state) {
            state.userAnswers = []
        },
        setWastedTime(state, action: PayloadAction<number>) {
            state.wastedTime = action.payload
        },
        setUserAnswer(state, action: PayloadAction<string>) {
            state.userAnswer = action.payload
        },
        setCurrentQuestion(state, action: PayloadAction<number>) {
            state.currentQuestion = action.payload
        },
        setPassedQuestions(state, action: PayloadAction<boolean>) {
            state.passedQuestions = [...state.passedQuestions, action.payload]
        },
        resetPassedQuestions(state) {
            state.passedQuestions = []
        },
        setFinishedTest(state, action: PayloadAction<boolean>) {
            state.finishedTest = action.payload
        }
    }
})

export const { addUserAnswer, resetUserAnswers, setUserAnswer,
    resetPassedQuestions, setPassedQuestions, setCurrentQuestion,
    setWastedTime, setFinishedTest
} = testSlice.actions

export const testReducer = testSlice.reducer
