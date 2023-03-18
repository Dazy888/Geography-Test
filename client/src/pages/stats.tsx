import React, {useEffect, useState} from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// Hooks
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Store
import { resetPassedQuestions, resetUserAnswers, setCurrentQuestion } from "@/store/reducer/TestSlice"
// Styles
import styles from '@/styles/Stats.module.scss'
// Component
import { AnswersRow } from "@/components/stats/AnswersRow"

const Stats = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const wastedTime = useAppSelector(state => state.testReducer.wastedTime)
    const answers = useAppSelector(state => state.testReducer.answers)
    const questions = useAppSelector(state => state.testReducer.questions)
    const trueAnswers = useAppSelector(state => state.testReducer.trueAnswers)
    const userAnswers = useAppSelector(state => state.testReducer.userAnswer)

    const [grades, setGrades] = useState(0)

    useEffect(() => {
        if (wastedTime === 0) router.push('/')
        if (userAnswers) for (let i = 0; i < 11; i++) if (trueAnswers[i] === userAnswers[i]) setGrades(grades + 1)
    }, [])

    const restartTest = () => {
        dispatch(resetUserAnswers())
        dispatch(setCurrentQuestion(0))
        dispatch(resetPassedQuestions())
        router.push('/')
    }

    return(
        <>
            <Head>
                <title>Stats</title>
            </Head>
            <div id={styles.wrapper} className={'w-fit min-h-screen mx-auto py-24'}>
                <div className={`${styles.gratitude} mx-auto rounded-xl text-center p-4`}>
                    <p className={'mb-5 text-2xl'}>Thanks for passing the test</p>
                    <p className={'my-5 text-xl'}>You earned <span className={styles['colorful-text']}>{grades}</span> of 10 grades</p>
                    <p className={'my-5 text-xl'}>For passing the test you wasted <span className={styles['colorful-text']}>{wastedTime}</span> seconds</p>
                    <p className={'text-xl'}>On average, it took you <span className={styles['colorful-text']}>{Math.round(10 / wastedTime)}</span> seconds to answer</p>
                </div>
                <div className={`${styles.answers} mx-auto relative text-center`}>
                    <AnswersRow trueAnswer={trueAnswers[0]} userAnswer={userAnswers[0]} question={questions[0]} answers={answers[0]} additionalInfo={['543.940 km²', '603.548 km²', '357.588 km²', '312.679 km²']}/>
                    <AnswersRow trueAnswer={trueAnswers[1]} userAnswer={userAnswers[1]} question={questions[1]} answers={answers[1]} additionalInfo={['371.000 km²', '9.700 km²', '5.650 km²', '17.700 km²']}/>
                    <AnswersRow trueAnswer={trueAnswers[2]} userAnswer={userAnswers[2]} question={questions[2]} answers={answers[2]} additionalInfo={['5.642 m', '5.193 m', '5.144 m', '4.809 m']}/>
                    <AnswersRow trueAnswer={trueAnswers[3]} userAnswer={userAnswers[3]} question={questions[3]} answers={answers[3]} additionalInfo={['2.428 km', '3.530 km', '2.201 km', '1.430 km']}/>
                    <AnswersRow trueAnswer={trueAnswers[4]} userAnswer={userAnswers[4]} question={questions[4]} answers={answers[4]} additionalInfo={['587.041 km²', '786.000 km²', '743.330 km²', '2.166.000 km²']}/>
                    <AnswersRow trueAnswer={trueAnswers[5]} userAnswer={userAnswers[5]} question={questions[5]} answers={answers[5]}/>
                    <AnswersRow trueAnswer={trueAnswers[6]} userAnswer={userAnswers[6]} question={questions[6]} answers={answers[6]}/>
                    <AnswersRow trueAnswer={trueAnswers[7]} userAnswer={userAnswers[7]} question={questions[7]} answers={answers[7]}/>
                    <AnswersRow trueAnswer={trueAnswers[8]} userAnswer={userAnswers[8]} question={questions[8]} answers={answers[8]} additionalInfo={['69.911 km', '58.232 km', '3.389 km', '24.622 km']}/>
                    <AnswersRow trueAnswer={trueAnswers[9]} userAnswer={userAnswers[9]} question={questions[9]} answers={answers[9]}/>
                </div>
                <button onClick={restartTest} className={`${styles["restart-btn"]} mt-24 mx-auto rounded-xl text-2xl text-white`}>Restart Test</button>
            </div>
        </>
    )
}

export default React.memo(Stats)
