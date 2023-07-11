import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TestState {
    questions: string[]
    answers: Array<string[]>
    trueAnswers: string[]
    userAnswer: string
    userAnswers: string[]
    wastedTime: number
    currentQuestion: number
    passedQuestions: boolean[]
    circleR: number
}

let initialState: TestState = {
    questions: [
        'What is the largest country in Europe?', 'What is the biggest lake in Europe?', 'What is the highest mountain in Europe?', 'What is the longest river in Europe?',
        'What is the biggest island in the world?', 'How many oceans are on the planet?', 'How many continents are on the planet?', 'What is the number of Earth from the Sun',
        'What is the largest planet in the Solar System?', 'How many planets are in the Solar System?'
    ],
    answers: [
        ['France', 'Ukraine', 'Germany', 'Poland'], ['Caspian Sea', 'Onega', 'Vanern', 'Ladoga'], ['Elbrus', 'Shikhar', 'Konstan-Tau', 'Mont Blanc'],
        ['Ural', 'Volga', 'Dynpro', 'Belay'], ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'], ['4', '7', '3', '5'], ['3', '5', '9', '6'],
        ['2', '5', '4', '3'], ['Jupiter', 'Saturn', 'Mars', 'Neptune'], ['6', '8', '5', '7']
    ],
    trueAnswers: ['Ukraine', 'Caspian Sea', 'Elbrus', 'Volga', 'Greenland', '5', '6', '3', 'Jupiter', '8'],
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

export const { addUserAnswer, resetUserAnswers, setUserAnswer,
    resetPassedQuestions, setPassedQuestions, setCurrentQuestion,
    setWastedTime
} = testSlice.actions

export const testReducer = testSlice.reducer
