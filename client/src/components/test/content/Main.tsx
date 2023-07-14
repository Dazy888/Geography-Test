import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from "@/styles/Test.module.scss"
import { addUserAnswer, setCurrentQuestion, setPassedQuestions, setUserAnswer } from "@/store/reducer/TestSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Components
import { Question } from "@/components/test/content/Question"
import { Answers } from "@/components/test/content/answers/Answers"
import { NextBtn } from "@/components/test/content/NextBtn"

export const answers = [
    ['France', 'Ukraine', 'Germany', 'Poland'], ['Caspian Sea', 'Onega', 'Vanern', 'Ladoga'], ['Elbrus', 'Shikhar', 'Konstan-Tau', 'Mont Blanc'],
    ['Ural', 'Volga', 'Dynpro', 'Belay'], ['Madagascar', 'New Guinea', 'Borneo', 'Greenland'], ['4', '7', '3', '5'], ['3', '5', '9', '6'],
    ['2', '5', '4', '3'], ['Jupiter', 'Saturn', 'Mars', 'Neptune'], ['6', '8', '5', '7']
]

const MainComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)
    const userAnswer = useAppSelector(state => state.testReducer.userAnswer)

    const nextQuestionListener = () => {
        if (!userAnswer) return
        if (currentQuestion === 9) {
            router.push('/stats')
        }

        dispatch(addUserAnswer(userAnswer))
        dispatch(setUserAnswer(''))
        nextQuesAnim()
        setTimeout(() => dispatch(setCurrentQuestion(currentQuestion + 1)), 600)
        dispatch(setPassedQuestions(true))
    }

    const [imgAnim, setImgAnim] = useState('')
    const [textAnim, setTextAnim] = useState('')

    const setAnimations =(values: string[]) => {
        setImgAnim(values[0])
        setTextAnim(values[1])
    }

    const nextQuesAnim = () => {
        setAnimations([styles['img-animation'], styles['text-animation']])
        setTimeout(() => setAnimations(['', '']), 900)
    }

    return(
        <main className={'text-center mx-auto mb-10'}>
            <Question {...{ imgAnim, textAnim }} />
            <Answers {...{ textAnim }} answers={answers[currentQuestion]} />
            <NextBtn {...{ nextQuestionListener }} />
        </main>
    )
}

export const Main = React.memo(MainComponent)
