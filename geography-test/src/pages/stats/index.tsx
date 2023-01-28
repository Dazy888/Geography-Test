import React, {useEffect} from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
// Store
import { getAllAnswers, getAverageAnswerTime, getGrades, getQuestions, getTrueAnswers, getUserAnswers, getWastedTime } from "@/store/reducer/test-selector"
import { TestReducerActions } from "@/store/reducer/test-reducer"
// Styles
import styles from '@/styles/Stats.module.scss'
// Components
import { AnswersRow } from "@/components/stats/Answers-row"
import { RestartBtn } from "@/components/stats/Restart-btn"
import { Gratitude } from "@/components/stats/Gratitude"

const Stats = () => {
    useEffect(() => {
        if (wastedTime === 0) router.push('/')
    }, [])

    const dispatch = useDispatch()
    const router = useRouter()

    const wastedTime = useSelector(getWastedTime)
    const averageAnswerTime = useSelector(getAverageAnswerTime)
    const grades = useSelector(getGrades)
    const answers = useSelector(getAllAnswers)
    const questions = useSelector(getQuestions)
    const trueAnswers = useSelector(getTrueAnswers)
    const userAnswers = useSelector(getUserAnswers)

    function restartListener() {
        dispatch(TestReducerActions.resetUserAnswers())
        dispatch(TestReducerActions.setCurrentQuestion(0))
        dispatch(TestReducerActions.resetPassedQuestions())
        router.push('/')
    }

    return(
        <>
            <Head>
                <title>Stats</title>
            </Head>
            <div id={styles['wrapper']}>
                <Gratitude grades={grades} wastedTime={wastedTime} averageAnswerTime={averageAnswerTime}/>
                <div className={styles["answers"]}>
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
                <RestartBtn restartListener={restartListener}/>
            </div>
        </>
    )
}

export default React.memo(Stats)