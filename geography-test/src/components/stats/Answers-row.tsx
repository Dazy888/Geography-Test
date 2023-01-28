import React from "react"
import styles from '@/styles/Stats.module.scss'
import { AnswersBlock } from "@/components/stats/Answers-block"

interface Props {
    question: string
    answers: string[]
    additionalInfo?: string[]
    trueAnswer: string
    userAnswer: string
}

const AnswersRowComponent: React.FC<Props> = ({ answers, additionalInfo = [], question, trueAnswer, userAnswer }) => {
    return(
        <div className={styles['answers__question']}>
            <h1>{question}</h1>
            <div className={styles['answers__content']}>
                <AnswersBlock className={styles['a']} trueAnswer={trueAnswer === answers[0]} userAnswer={userAnswer === answers[0]} icon={'a'} answer={answers[0]} additionalInf={additionalInfo[0]}/>
                <AnswersBlock className={styles['b']} trueAnswer={trueAnswer === answers[1]} userAnswer={userAnswer === answers[1]} icon={'b'} answer={answers[1]} additionalInf={additionalInfo[1]}/>
                <AnswersBlock className={styles['c']} trueAnswer={trueAnswer === answers[2]} userAnswer={userAnswer === answers[2]} icon={'c'} answer={answers[2]} additionalInf={additionalInfo[2]}/>
                <AnswersBlock className={styles['d']} trueAnswer={trueAnswer === answers[3]} userAnswer={userAnswer === answers[3]} icon={'d'} answer={answers[3]} additionalInf={additionalInfo[3]}/>
            </div>
        </div>
    )
}

export const AnswersRow = React.memo(AnswersRowComponent)