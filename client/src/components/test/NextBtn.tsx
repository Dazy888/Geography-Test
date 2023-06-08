import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    nextQuestionListener: () => void
}

const NextButtonComponent: React.FC<Props> = ({ nextQuestionListener }) => (
    <button onClick={nextQuestionListener} className={`${styles['next-btn']} mx-auto mt-10`}>
        <i className={'fa-regular fa-circle-right text-5xl duration-300'}/>
    </button>
)

export const NextBtn = React.memo(NextButtonComponent)