import React from "react"
import styles from "@/styles/Test.module.scss"
import { v4 } from "uuid"
import { useAppSelector } from "@/hooks/redux"
import { QuestionNumber } from "@/components/test/header/questions/QuestionNumber"

const QuestionsComponent = () => {
    const passedQuestions = useAppSelector(state => state.testReducer.passedQuestions)

    return(
        <div className={styles.questions}>
            <i className={`${styles['current-question-icon']} fa-solid fa-clipboard-question mb-12`} />
            <div className={'grid grid-cols-5 gap-7 mb-10'}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, index) => <QuestionNumber key={v4()} passed={passedQuestions[index]} number={number} />)}
            </div>
        </div>
    )
}

export const Questions = React.memo(QuestionsComponent)
