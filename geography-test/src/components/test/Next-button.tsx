import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    nextQuestionListener: () => void
}

const NextButtonComponent: React.FC<Props> = ({ nextQuestionListener }) => {
    return(
        <div className={styles['content__next-button']}>
            <button onClick={nextQuestionListener}>
                <i className="fa-regular fa-circle-right"/>
            </button>
        </div>
    )
}

export const NextButton = React.memo(NextButtonComponent)