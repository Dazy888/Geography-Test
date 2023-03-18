import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    passed: boolean
    number: string
}

const QuestionIconComponent: React.FC<Props> = ({ number, passed }) => {
    return(
        <div className={`flex justify-center items-center w-10 h-10 rounded-full ${passed? styles['current-question'] : ''}`}>
            <i className={`fa-solid fa-${number} text-lg`}/>
        </div>
    )
}

export const QuestionIcon = React.memo(QuestionIconComponent)
