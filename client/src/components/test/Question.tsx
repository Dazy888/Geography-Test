import React from "react"
import styles from "@/styles/Test.module.scss"

interface Props {
    textAnim: string
    question: string
    imgAnim: string
    image: string
}

const QuestionComponent: React.FC<Props> = ({ question, imgAnim, textAnim, image }) => (
    <div className={styles.question}>
        <p className={`${textAnim} inline-block my-7 text-2xl`}>{question}</p>
        <img className={`${imgAnim} block mx-auto`} src={image} alt={'Hello'}/>
    </div>
)

export const Question = React.memo(QuestionComponent)
