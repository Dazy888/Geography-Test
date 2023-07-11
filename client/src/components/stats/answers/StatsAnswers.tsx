import React from "react"
import styles from "@/styles/Stats.module.scss"
import { AnswersRow } from "@/components/stats/answers/AnswersRow"
import { useAppSelector } from "@/hooks/redux"

interface Props {
    trueAnswers: string[]
    userAnswers: string[]
}

const StatsAnswersComponents: React.FC<Props> = ({ userAnswers, trueAnswers}) => {
    const answers = useAppSelector(state => state.testReducer.answers)
    const questions = useAppSelector(state => state.testReducer.questions)

    const additionalInfo = [
        ['543.940 km²', '603.548 km²', '357.588 km²', '312.679 km²'], ['371.000 km²', '9.700 km²', '5.650 km²', '17.700 km²'], ['5.642 m', '5.193 m', '5.144 m', '4.809 m'],
        ['2.428 km', '3.530 km', '2.201 km', '1.430 km'], ['587.041 km²', '786.000 km²', '743.330 km²', '2.166.000 km²'], [], [], [],
        ['69.911 km', '58.232 km', '3.389 km', '24.622 km']
    ]

    return(
        <div className={`${styles.answers} mx-auto relative text-center`}>
            {userAnswers.map((userAnswer, index) => (
                <AnswersRow question={questions[index]} answers={answers[index]} trueAnswer={trueAnswers[index]} userAnswer={userAnswer} additionalInfo={additionalInfo[index]} />
            ))}
        </div>
    )
}

export const StatsAnswers = React.memo(StatsAnswersComponents)
