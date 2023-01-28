import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    textAnim: string
    question: string
    imgAnim: string
    image: string
}

const QuestionComponent: React.FC<Props> = ({ question, imgAnim, textAnim, image }) => {
    return(
        <div className={styles["content__question"]}>
            <p className={textAnim}>{question}</p>
            <img className={imgAnim} src={image} alt={'Hello'}/>
        </div>
    )
}

export const Question = React.memo(QuestionComponent)