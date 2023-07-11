import React from "react"
import styles from "@/styles/Test.module.scss"
import { useAppSelector } from "@/hooks/redux"
import Image from "next/image";

interface Props {
    textAnim: string
    imgAnim: string
}

const QuestionComponent: React.FC<Props> = ({ imgAnim, textAnim }) => {
    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)
    const question = useAppSelector(state => state.testReducer.questions[currentQuestion])
    const image = useAppSelector(state => state.testReducer.images[currentQuestion])

    return(
        <div className={styles.question}>
            <p className={`${textAnim} inline-block my-7 text-2xl`}>{question}</p>
            <Image width={600} height={330} className={`${imgAnim} object-cover mx-auto`} src={`/questions/${image}`} alt={'Question image'} />
        </div>
    )
}

export const Question = React.memo(QuestionComponent)
