import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from "@/styles/Test.module.scss"
import { addUserAnswer, setCurrentQuestion, setPassedQuestions, setUserAnswer } from "@/store/reducer/TestSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Components
import { Question } from "@/components/test/content/Question"
import { Answers } from "@/components/test/content/answers/Answers"
import { NextBtn } from "@/components/test/content/NextBtn"

const MainComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)
    const answers = useAppSelector(state => state.testReducer.answers[currentQuestion])
    const userAnswer = useAppSelector(state => state.testReducer.userAnswer)

    const nextQuestionListener = () => {
        if (!userAnswer) return
        if (currentQuestion === 9) router.push('/stats')

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
        <main className={'text-center mx-auto'}>
            <Question {...{ imgAnim, textAnim }} />
            <Answers {...{ answers, textAnim }} />
            <NextBtn {...{ nextQuestionListener }} />
        </main>
    )
}

export const Main = React.memo(MainComponent)
