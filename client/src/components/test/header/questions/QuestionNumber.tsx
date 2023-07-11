import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    passed: boolean
    number: number
}

const QuestionNumberComponent: React.FC<Props> = ({ number, passed }) => (
    <div className={`block flex-center w-10 h-10 rounded-full text-xl font-medium duration-1000 ${styles['questions__number']} ${passed ? styles['current-question'] : ''}`}>
        {number}
    </div>
)

export const QuestionNumber = React.memo(QuestionNumberComponent)
