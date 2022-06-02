import {InferActionTypes} from "./Redux-Store";

let initialState = {
    questions: [
        'What country is the biggest in Europe?',
        'What lake is the biggest in Europe',
        'What mountain is the biggest in Europe',
        'What river is the longest in Europe',
        'What island is the biggest in the world',
        'How many oceans are on the planet',
        'How many mainlands are on the planet',
        'What is the account of the earth from the sun',
        'What is the biggest planet in the solar system',
        'How many planets are in the solar system',
    ] as Array<string>,
    answers: [
        ['France', 'Ukraine', 'Germany', 'Polish'],
        ['Caspian Sea', 'Onega', 'Vanern', 'Ladoga'],
        ['Elbrus', 'Shikhar', 'Konstan-Tau', 'Mont Blanc'],
        ['Ural', 'Volga', 'Dynpro', 'Belay'],
        ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'],
        ['4', '7', '3', '5'],
        ['3', '5', '9', '6'],
        ['2', '5', '4', '3'],
        ['Jupiter', 'Saturn', 'Mars', 'Neptune'],
        ['6', '8', '5', '7'],
    ] as Array<Array<string>>,
    trueAnswers: [
        'Ukraine',
        'Caspian Sea',
        'Elbrus',
        'Volga',
        'Greenland',
        '5',
        '6',
        '3',
        'Jupiter',
        '8'
    ] as Array<string>,
    photographs: [
        './Photos/question-1-img.png',
        './Photos/question-2-img.jpg',
        './Photos/question-3-img.jpg',
        './Photos/question-4-img.jpg',
        './Photos/question-5-img.jpg',
        './Photos/question-6-img.jpg',
        './Photos/question-7-img.jpg',
        './Photos/question-8-img.jpg',
        './Photos/question-9-img.jpg',
        './Photos/question-10-img.jpg',
    ] as Array<string>,
    userAnswers: [] as Array<string>,
    grades: 0,
    isChosen: false,
    wastedTime: 0,
    averageAnswerTime: 0
}

type InitialStateType = typeof initialState

function testReducer(state = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case 'GEOGRAPHY-TEST/TEST/PLUS-GRADE':
            return {
                ...state,
                grades: state.grades + 1
            }
        case 'GEOGRAPHY-TEST/TEST/ADD-USER-ANSWER':
            return {
                ...state,
                userAnswers: [...state.userAnswers, action.answer]
            }
        case 'GEOGRAPHY-TEST/TEST/CHOSE-ANSWER':
            return {
                ...state,
                isChosen: true
            }
        case 'GEOGRAPHY-TEST/TEST/RESET-ANSWER' :
            return {
                ...state,
                isChosen: false
            }
        case 'GEOGRAPHY-TEST/TEST/RESET-GRADES':
            return {
                ...state,
                grades: 0
            }
        case 'GEOGRAPHY-TEST/TEST/RESET-USER-ANSWERS':
            return {
                ...state,
                userAnswers: []
            }
        case 'GEOGRAPHY-TEST/TEST/SET-WASTED-TIME' :
            console.log(action.time)
            return {
                ...state,
                wastedTime: action.time
            }
        case 'GEOGRAPHY-TEST/TEST/SET-AVERAGE-ANSWER-TIME':
            return {
                ...state,
                averageAnswerTime: action.time
            }
        default:
            return {
                ...state
            }
    }
}

type ActionsType = InferActionTypes<typeof TestReducerActions>

export const TestReducerActions = {
    plusGrade: () => ({type: 'GEOGRAPHY-TEST/TEST/PLUS-GRADE'} as const),
    addUserAnswer: (answer: string) => ({type: 'GEOGRAPHY-TEST/TEST/ADD-USER-ANSWER', answer} as const),
    choseAnswer: () => ({type: 'GEOGRAPHY-TEST/TEST/CHOSE-ANSWER'} as const),
    resetAnswer: () => ({type: 'GEOGRAPHY-TEST/TEST/RESET-ANSWER'} as const),
    resetGrades: () => ({type: 'GEOGRAPHY-TEST/TEST/RESET-GRADES'} as const),
    resetUserAnswers: () => ({type: 'GEOGRAPHY-TEST/TEST/RESET-USER-ANSWERS'} as const),
    setWastedTime: (time: number) => ({type: 'GEOGRAPHY-TEST/TEST/SET-WASTED-TIME', time} as const),
    setAverageAnswerTime: (time: number) => ({type: 'GEOGRAPHY-TEST/TEST/SET-AVERAGE-ANSWER-TIME', time} as const)
}

export function plusGrade() {
    return (dispatch: any) => {
        dispatch(TestReducerActions.plusGrade())
    }
}

export function addUserAnswer(answer: string) {
    return (dispatch: any) => {
        dispatch(TestReducerActions.addUserAnswer(answer))
    }
}

export function choseAnswer() {
    return (dispatch: any) => {
        dispatch(TestReducerActions.choseAnswer())
    }
}

export function resetAnswer() {
    return (dispatch: any) => {
        dispatch(TestReducerActions.resetAnswer())
    }
}

export function resetGrades() {
    return (dispatch: any) => {
        dispatch(TestReducerActions.resetGrades())
    }
}

export function resetUserAnswers() {
    return (dispatch: any) => {
        dispatch(TestReducerActions.resetUserAnswers())
    }
}

export function setWastedTime(time: number) {
    console.log(time)
    return (dispatch: any) => {
        dispatch(TestReducerActions.setWastedTime(time))
    }
}

export function setAverageAnswerTime(time: number) {
    return (dispatch: any) => {
        dispatch(TestReducerActions.setAverageAnswerTime(time))
    }
}

export default testReducer