import React, { useEffect } from "react"
import styles from "@/styles/Test.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { setUserAnswer } from "@/store/reducer/TestSlice"

interface Props {
    letter: string
    answer: string
    animation: string
}

const AnswerComponent: React.FC<Props> = ({ answer, letter, animation }) => {
    const dispatch = useAppDispatch()
    const userAnswer = useAppSelector(state => state.testReducer.userAnswer)
    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)

    useEffect(() => {
        if (currentQuestion > 0) {
            const selectedAnswer = document.querySelector(`.${styles['selected-answer']}`)
            selectedAnswer?.classList.remove(styles['selected-answer'])
            dispatch(setUserAnswer(''))
        }
    }, [currentQuestion])

    const answerListener = (e: React.MouseEvent<HTMLSpanElement>) => {
        const setAnswer = () => {
            const span = (e.target as Element).closest('span');
            span?.classList.add(styles['selected-answer'])
            dispatch(setUserAnswer(answer))
        }

        if (userAnswer) {
            const selectedAnswer = document.querySelector(`.${styles['selected-answer']}`)
            selectedAnswer?.classList.remove(styles['selected-answer'])
            dispatch(setUserAnswer(''))
            setAnswer()
        } else {
            setAnswer()
        }
    }

    return(
        <div className={'text-center'}>
            <span onClick={answerListener} className={'flex-center w-10 h-10 rounded-full cursor-pointer mx-auto text-xl'}>
                <i className={`fa-solid fa-${letter}`}/>
            </span>
            <p className={`${animation} mt-2 duration-600 text-lg`}>{answer}</p>
        </div>
    )
}

export const Answer = React.memo(AnswerComponent)
