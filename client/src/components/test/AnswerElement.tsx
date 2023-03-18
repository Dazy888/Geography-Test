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
        <div className={`${styles[letter]} text-center`}>
            <span onClick={answerListener} className={'flex justify-center items-center w-10 h-10 rounded-full cursor-pointer mx-auto'}>
                <i className={`fa-solid fa-${letter} text-xl`}/>
            </span>
            <p className={`${animation} mt-2 duration-600 text-lg`}>{answer}</p>
        </div>
    )
}

export const AnswerElement = React.memo(AnswerElementComponents)
