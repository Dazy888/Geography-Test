import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// Styles
import styles from "@/styles/Test.module.scss"
// Store
import { TestReducerActions } from "@/store/reducer/test-reducer"
import { getCurrentQuestion, getUserAnswer } from "@/store/reducer/test-selector"
// Component
import { AnswerElement } from "@/components/test/Answer-element"

interface Props {
    letter: string
    answer: string
    animation: string
}

const AnswerComponent: React.FC<Props> = ({ answer, letter, animation }) => {
    const dispatch = useDispatch()
    const userAnswer = useSelector(getUserAnswer)
    const currentQuestion = useSelector(getCurrentQuestion)

    useEffect(() => {
        if (currentQuestion > 0) {
            const selectedAnswer: any = document.querySelector(`.${styles['content__selected-answer']}`)
            if (selectedAnswer) {
                selectedAnswer.classList.remove(styles['content__selected-answer'])
                dispatch(TestReducerActions.setUserAnswer(''))
            }
        }
    }, [currentQuestion])

    function answerListener(e: any) {
        function setAnswer() {
            const span = e.target.closest('span')
            span.classList.add(styles['content__selected-answer'])
            dispatch(TestReducerActions.setUserAnswer(answer))
        }

        if (userAnswer) {
            const selectedAnswer: any = document.querySelector(`.${styles['content__selected-answer']}`)
            selectedAnswer.classList.remove(styles['content__selected-answer'])
            dispatch(TestReducerActions.setUserAnswer(''))
            setAnswer()
        } else {
            setAnswer()
        }
    }

    return <AnswerElement letter={letter} answer={answer} animation={animation} answerListener={answerListener}/>
}

export const Answer = React.memo(AnswerComponent)