import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TestState {
    questions: string[]
    answers: Array<string[]>
    trueAnswers: string[]
    images: string[]
    userAnswer: string
    userAnswers: string[]
    wastedTime: number
    currentQuestion: number
    passedQuestions: boolean[]
    circleR: number
}

let initialState: TestState = {
    questions: [
        'What country is the biggest in Europe?', 'What lake is the biggest in Europe?', 'What mountain is the biggest in Europe?', 'What river is the longest in Europe?',
        'What island is the biggest in the world?', 'How many oceans are on the planet?', 'How many mainlands are on the planet?',
        'What is the account of the earth from the sun?', 'What is the biggest planet in the solar system?', 'How many planets are in the solar system?'
    ],
    answers: [
        ['France', 'Ukraine', 'Germany', 'Poland'], ['Caspian Sea', 'Onega', 'Vanern', 'Ladoga'], ['Elbrus', 'Shikhar', 'Konstan-Tau', 'Mont Blanc'],
        ['Ural', 'Volga', 'Dynpro', 'Belay'], ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'], ['4', '7', '3', '5'], ['3', '5', '9', '6'],
        ['2', '5', '4', '3'], ['Jupiter', 'Saturn', 'Mars', 'Neptune'], ['6', '8', '5', '7']
    ],
    trueAnswers: ['Ukraine', 'Caspian Sea', 'Elbrus', 'Volga', 'Greenland', '5', '6', '3', 'Jupiter', '8'],
    images: ['question-1.png', 'question-2.jpg', 'question-3.jpg', 'question-4.jpg', 'question-5.jpg', 'question-6.jpg', 'question-7.jpg', 'question-8.jpg', 'question-9.jpg', 'question-10.jpg'],
    userAnswer: '',
    userAnswers: [],
    wastedTime: 0,
    currentQuestion: 0,
    passedQuestions: [],
    circleR: 60
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
        }
    }
})

export const { addUserAnswer, resetUserAnswers, setUserAnswer, resetPassedQuestions,
    setPassedQuestions, setCurrentQuestion, setWastedTime
} = testSlice.actions
export const testReducer = testSlice.reducer
