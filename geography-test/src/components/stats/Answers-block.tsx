import React from "react"
import styles from '@/styles/Stats.module.scss'

interface Props {
    icon: string
    answer: string
    additionalInf: string
    trueAnswer: boolean
    userAnswer: boolean
    className: string
}

const AnswersBlockComponent: React.FC<Props> = ({ icon, answer, additionalInf, trueAnswer, userAnswer, className }) => {
    return(
        <div className={className}>
            <span className={`${trueAnswer ? styles['true-answer'] : ''} ${userAnswer ? styles['user-answer'] : ''} flex-center`}>
                <i className={`fa-solid fa-${icon}`}/>
            </span>
            <p>{answer}</p>
            {additionalInf ? <p>{additionalInf}</p> : null}
        </div>
    )
}

export const AnswersBlock = React.memo(AnswersBlockComponent)