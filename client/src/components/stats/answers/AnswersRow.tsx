import React from "react"
import styles from '@/styles/Stats.module.scss'
import { Answer } from "@/components/stats/answers/Answer"

interface Props {
    question: string
    answers: string[]
    additionalInfo?: string[]
    trueAnswer: string
    userAnswer: string
}

const AnswersRowComponent: React.FC<Props> = ({ answers, additionalInfo = [], question, trueAnswer, userAnswer }) => (
    <div className={`${styles['answers__question']} mt-40`}>
        <h1 className={'mb-5 text-2xl'}>{question}</h1>
        <div className={`${styles['answers__content']} grid grid-cols-4 rounded-lg py-10 items-center p-5`}>
            <Answer className={styles['a']} trueAnswer={trueAnswer === answers[0]} userAnswer={userAnswer === answers[0]} icon={'a'} answer={answers[0]} additionalInf={additionalInfo[0]}/>
            <Answer className={styles['b']} trueAnswer={trueAnswer === answers[1]} userAnswer={userAnswer === answers[1]} icon={'b'} answer={answers[1]} additionalInf={additionalInfo[1]}/>
            <Answer className={styles['c']} trueAnswer={trueAnswer === answers[2]} userAnswer={userAnswer === answers[2]} icon={'c'} answer={answers[2]} additionalInf={additionalInfo[2]}/>
            <Answer className={styles['d']} trueAnswer={trueAnswer === answers[3]} userAnswer={userAnswer === answers[3]} icon={'d'} answer={answers[3]} additionalInf={additionalInfo[3]}/>
        </div>
    </div>
)

export const AnswersRow = React.memo(AnswersRowComponent)
