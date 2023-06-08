import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from "@/styles/Test.module.scss"
import { addUserAnswer, setCurrentQuestion, setPassedQuestions, setUserAnswer } from "@/store/reducer/TestSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Components
import { Question } from "@/components/test/Question"
import { Answer } from "@/components/test/Answer"
import { NextBtn } from "@/components/test/NextBtn"

const ContentComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)
    const question = useAppSelector(state => state.testReducer.questions[currentQuestion])
    const image = useAppSelector(state => state.testReducer.images[currentQuestion])
    const answers = useAppSelector(state => state.testReducer.answers[currentQuestion])
    const userAnswer = useAppSelector(state => state.testReducer.userAnswer)

    const nextQuestionListener = () => {
        if (!userAnswer) return
        if (currentQuestion === 9) router.push('/stats')

        dispatch(addUserAnswer(''))
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
        <div className={`${styles.content} text-center mx-auto`}>
            <Question {...{ question, image, imgAnim, textAnim }} />
            <div className={`${styles.answers} grid justify-center mt-5 mx-auto`}>
                <Answer animation={textAnim} letter={'a'} answer={answers[0]}/>
                <Answer animation={textAnim} letter={'b'} answer={answers[1]}/>
                <Answer animation={textAnim} letter={'c'} answer={answers[2]}/>
                <Answer animation={textAnim} letter={'d'} answer={answers[3]}/>
            </div>
            <NextBtn nextQuestionListener={nextQuestionListener}/>
        </div>
    )
}

export const Content = React.memo(ContentComponent)
