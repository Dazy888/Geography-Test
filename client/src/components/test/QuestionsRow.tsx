import React from "react"
import styles from '@/styles/Test.module.scss'
import { QuestionIcon } from "@/components/test/QuestionIcon"

interface Props {
    passed: boolean[]
    numbers: string[]
    double?: boolean
}

const questionsRowComponent: React.FC<Props> = ({ numbers, double, passed }) => {
    return(
        <div className={'flex justify-between mb-7'}>
            <QuestionIcon passed={passed[0]} number={numbers[0]} />
            <QuestionIcon passed={passed[1]} number={numbers[1]} />
            <QuestionIcon passed={passed[2]} number={numbers[2]} />
            <QuestionIcon passed={passed[3]} number={numbers[3]} />
            <div className={`flex justify-center items-center w-10 h-10 rounded-full ${passed[4] ? styles['current-question'] : ''}`}>
                {double
                    ?   <p>
                            <i className={'fa-solid fa-1 num-icon'}/>
                            <i className={'fa-solid fa-0 num-icon'}/>
                        </p>
                    :   <i className={`fa-solid fa-${numbers[4]}`}/>
                }
            </div>
        </div>
    )
}

export const QuestionsRow = React.memo(questionsRowComponent)
