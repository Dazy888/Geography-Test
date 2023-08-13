import React from "react"
import styles from "@/styles/Test.module.scss"
import { Answer } from "@/components/test/content/answers/Answer"

interface Props {
    answers: string[]
    textAnim: string
}

const AnswersComponent: React.FC<Props> = ({ answers, textAnim }) => (
    <div className={`${styles.answers} w-fit grid grid-cols-2 justify-center gap-y-16 gap-x-36 mt-5 mx-auto`}>
        {answers &&
            <>
                <Answer animation={textAnim} letter={'a'} answer={answers[0]}/>
                <Answer animation={textAnim} letter={'b'} answer={answers[1]}/>
                <Answer animation={textAnim} letter={'c'} answer={answers[2]}/>
                <Answer animation={textAnim} letter={'d'} answer={answers[3]}/>
            </>
        }
    </div>
)

export const Answers = React.memo(AnswersComponent)
