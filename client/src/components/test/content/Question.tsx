import React from "react"
import Image from "next/image"
import styles from "@/styles/Test.module.scss"
import { useAppSelector } from "@/hooks/redux"

interface Props {
    textAnim: string
    imgAnim: string
}

export const questions = [
    'What is the largest country in Europe?', 'What is the biggest lake in Europe?', 'What is the highest mountain in Europe?', 'What is the longest river in Europe?',
    'What is the biggest island in the world?', 'How many oceans are on the planet?', 'How many continents are on the planet?', 'What is the number of Earth from the Sun',
    'What is the largest planet in the Solar System?', 'How many planets are in the Solar System?'
]

const QuestionComponent: React.FC<Props> = ({ imgAnim, textAnim }) => {
    const currentQuestion = useAppSelector(state => state.testReducer.currentQuestion)

    return(
        <div className={styles.question}>
            <p className={`${textAnim} inline-block my-7 text-2xl`}>{questions[currentQuestion]}</p>
            <Image width={600} height={330} className={`${imgAnim} object-cover mx-auto rounded-lg`} src={`/questions/${currentQuestion + 1}.webp`} alt={'Question image'} />
        </div>
    )
}

export const Question = React.memo(QuestionComponent)
