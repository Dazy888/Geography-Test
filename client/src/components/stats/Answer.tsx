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

const AnswerComponent: React.FC<Props> = ({ icon, answer, additionalInf, trueAnswer, userAnswer, className }) => {
    return(
        <div className={className}>
            <span className={`${trueAnswer ? styles['true-answer'] : ''} ${userAnswer ? styles['user-answer'] : ''} flex justify-center items-center w-12 h-12 rounded-full mx-auto`}>
                <i className={`fa-solid fa-${icon} text-xl`}/>
            </span>
            <p className={'block m-2.5 text-lg'}>{answer}</p>
            {additionalInf && <p>{additionalInf}</p>}
        </div>
    )
}

export const Answer = React.memo(AnswerComponent)
