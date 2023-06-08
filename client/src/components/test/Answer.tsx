import React, { useEffect } from "react"
import styles from "@/styles/Test.module.scss"
import { AnswerElement } from "@/components/test/AnswerElement"
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
            const selectedAnswer: any = document.querySelector(`.${styles['selected-answer']}`)
            if (selectedAnswer) {
                selectedAnswer.classList.remove(styles['selected-answer'])
                dispatch(setUserAnswer(''))
            }
        }
    }, [currentQuestion])

    const answerListener = (e: any) => {
        const setAnswer = () => {
            const span = e.target.closest('span')
            span.classList.add(styles['selected-answer'])
             dispatch(setUserAnswer(answer))
        }

        if (userAnswer) {
            const selectedAnswer: any = document.querySelector(`.${styles['selected-answer']}`)
            selectedAnswer.classList.remove(styles['selected-answer'])

            dispatch(setUserAnswer(''))
            setAnswer()
        } else {
            setAnswer()
        }
    }

    return <AnswerElement {...{ letter, animation, answer }} answerListener={answerListener}/>
}

export const Answer = React.memo(AnswerComponent)
