import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    letter: string
    answer: string
    animation: string
    answerListener: (e: any) => void
}

const AnswerElementComponents: React.FC<Props> = ({ answer, letter, animation, answerListener }) => {
    return(
        <div className={styles[letter]}>
            <span onClick={answerListener} className={'flex-center'}>
                <i className={`fa-solid fa-${letter}`}/>
            </span>
            <p className={animation}>{answer}</p>
        </div>
    )
}

export const AnswerElement = React.memo(AnswerElementComponents)