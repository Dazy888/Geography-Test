import React, { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
// Styles
import styles from '@/styles/Test.module.scss'
// Components
import { Answer } from "@/components/timer/Answer"
import { Stats } from "@/components/timer/Stats"
import { NextButton } from "@/components/test/Next-button"
import { Question } from "@/components/test/Question"
// Store
import { getAnswers, getCurrentQuestion, getImage, getQuestion, getUserAnswer } from "@/store/reducer/test-selector"
import { TestReducerActions } from "@/store/reducer/test-reducer"

const Test: React.FC = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const question = useSelector(getQuestion)
    const image = useSelector(getImage)
    const answers = useSelector(getAnswers)
    const currentQuestion = useSelector(getCurrentQuestion)
    const userAnswer = useSelector(getUserAnswer)

    function nextQuestionListener() {
        if (!userAnswer) return
        if (currentQuestion === 9) router.push('/stats')

        dispatch(TestReducerActions.addUserAnswer())
        dispatch(TestReducerActions.setUserAnswer(''))
        nextQuesAnim()
        setTimeout(() => dispatch(TestReducerActions.setCurrentQuestion(currentQuestion + 1)), 600)
        dispatch(TestReducerActions.setPassedQuestions(true))
    }

    const [imgAnim, setImgAnim] = useState('')
    const [textAnim, setTextAnim] = useState('')

    function setAnimations(values: string[]) {
        setImgAnim(values[0])
        setTextAnim(values[1])
    }

    function nextQuesAnim() {
        setAnimations([styles['img-animation'], styles['text-animation']])
        setTimeout(() => setAnimations(['', '']), 900)
    }

    return(
        <>
            <Head>
                <title>Test</title>
            </Head>
            <div id={styles['wrapper']}>
                <Stats/>
                <div className={styles["content"]}>
                    <Question textAnim={textAnim} question={question} imgAnim={imgAnim} image={image}/>
                    <div className={styles["content__answers"]}>
                        <Answer animation={textAnim} letter={'a'} answer={answers[0]}/>
                        <Answer animation={textAnim} letter={'b'} answer={answers[1]}/>
                        <Answer animation={textAnim} letter={'c'} answer={answers[2]}/>
                        <Answer animation={textAnim} letter={'d'} answer={answers[3]}/>
                        <NextButton nextQuestionListener={nextQuestionListener}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Test)