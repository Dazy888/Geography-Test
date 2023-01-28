import { InferActionsTypes } from "../store"

let initialState = {
    questions: [
        'What country is the biggest in Europe ?',
        'What lake is the biggest in Europe ?',
        'What mountain is the biggest in Europe ?',
        'What river is the longest in Europe ?',
        'What island is the biggest in the world ?',
        'How many oceans are on the planet ?',
        'How many mainlands are on the planet ?',
        'What is the account of the earth from the sun ?',
        'What is the biggest planet in the solar system ?',
        'How many planets are in the solar system ?',
    ],
    answers: [
        ['France', 'Ukraine', 'Germany', 'Poland'],
        ['Caspian Sea', 'Onega', 'Vanern', 'Ladoga'],
        ['Elbrus', 'Shikhar', 'Konstan-Tau', 'Mont Blanc'],
        ['Ural', 'Volga', 'Dynpro', 'Belay'],
        ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'],
        ['4', '7', '3', '5'],
        ['3', '5', '9', '6'],
        ['2', '5', '4', '3'],
        ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
        ['6', '8', '5', '7'],
    ],
    trueAnswers: ['Ukraine', 'Caspian Sea', 'Elbrus', 'Volga', 'Greenland', '5', '6', '3', 'Jupiter', '8'],
    images: ['question-1.png', 'question-2.jpg', 'question-3.jpg', 'question-4.jpg', 'question-5.jpg', 'question-6.jpg', 'question-7.jpg', 'question-8.jpg', 'question-9.jpg', 'question-10.jpg',],
    userAnswer: '',
    userAnswers: [] as string[],
    wastedTime: 0,
    averageAnswerTime: 0,
    currentQuestion: 0,
    passedQuestions: [] as boolean[],
    circleR: 60
}

type InitialStateType = typeof initialState

function testReducer(state = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case 'GEOGRAPHY-TEST/test/ADD-USER-ANSWER':
            return {
                ...state,
                userAnswers: [...state.userAnswers, state.userAnswer]
            }
        case 'GEOGRAPHY-TEST/test/RESET-USER-ANSWERS':
            return {
                ...state,
                userAnswers: []
            }
        case 'GEOGRAPHY-TEST/test/SET-WASTED-TIME' :
            return {
                ...state,
                wastedTime: action.time
            }
        case 'GEOGRAPHY-TEST/test/SET-AVERAGE-ANSWER-TIME':
            return {
                ...state,
                averageAnswerTime: action.time
            }
        case 'GEOGRAPHY-TEST/test/SET-USER-ANSWER':
            return {
                ...state,
                userAnswer: action.answer
            }
        case 'GEOGRAPHY-TEST/test/SET-CURRENT-QUESTION':
            return {
                ...state,
                currentQuestion: action.value
            }
        case 'GEOGRAPHY-TEST/test/SET-PASSED-QUESTIONS':
            return {
                ...state,
                passedQuestions: [...state.passedQuestions, action.question]
            }
        case 'GEOGRAPHY-TEST/test/RESET-PASSED-QUESTIONS':
            return {
                ...state,
                passedQuestions: []
            }
        default:
            return {
                ...state
            }
    }
}

export type ActionsType = InferActionsTypes<typeof TestReducerActions>

export const TestReducerActions = {
    addUserAnswer: () => ({type: 'GEOGRAPHY-TEST/test/ADD-USER-ANSWER'} as const),
    resetUserAnswers: () => ({type: 'GEOGRAPHY-TEST/test/RESET-USER-ANSWERS'} as const),
    setWastedTime: (time: number) => ({type: 'GEOGRAPHY-TEST/test/SET-WASTED-TIME', time} as const),
    setAverageAnswerTime: (time: number) => ({type: 'GEOGRAPHY-TEST/test/SET-AVERAGE-ANSWER-TIME', time} as const),
    setUserAnswer: (answer: string) => ({type: 'GEOGRAPHY-TEST/test/SET-USER-ANSWER', answer} as const),
    setCurrentQuestion: (value: number) => ({type: 'GEOGRAPHY-TEST/test/SET-CURRENT-QUESTION', value} as const),
    resetPassedQuestions: () => ({type: 'GEOGRAPHY-TEST/test/RESET-PASSED-QUESTIONS'} as const),
    setPassedQuestions: (question: boolean) => ({type: 'GEOGRAPHY-TEST/test/SET-PASSED-QUESTIONS', question} as const),
}

export default testReducer