import {InferActionTypes} from "./Redux-Store";

let initialState = {
    questions: [
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
        ['Caspian Sea', 'Onega', 'Vänern', 'Ladoga'],
        ['Elbrus', 'Shkhara', 'Koshtan-Tau', 'Mont Blanc'],
        ['Ural', 'Volga', 'Dnipro', 'Belaya'],
        ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'],
        ['4', '7', '3', '5'],
        ['3', '5', '9', '6'],
        ['2', '5', '4', '3'],
        ['Jupiter', 'Saturn', 'Mars', 'Neptun'],
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
    userAnswers: [] as Array<string>,
    userGrades: 0

}

type InitialStateType = typeof initialState

function testReducer(state = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case 'GEOGRAPHY-TEST/TEST/PLUS-GRADE':
            return {
                ...state,
                userGrades: state.userGrades + 1
            }
        case 'GEOGRAPHY-TEST/TEST/ADD-USER-ANSWER':
            return {
                ...state,
                userAnswers: [...state.userAnswers, action.answer]
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
    addUserAnswer: (answer: string) => ({type: 'GEOGRAPHY-TEST/TEST/ADD-USER-ANSWER', answer} as const)
}

export default testReducer