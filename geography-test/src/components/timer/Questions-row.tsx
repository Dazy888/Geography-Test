import React from "react"
import styles from '@/styles/Test.module.scss'

interface Props {
    passed: boolean[]
    numbers: string[]
    double?: boolean
}

const questionsRowComponent: React.FC<Props> = ({ numbers, double= false, passed }) => {
    return(
        <div className={"flex-between"}>
            <span className={`flex-center ${passed[0] ? styles['current-question'] : ''}`}>
                <i className={`fa-solid fa-${numbers[0]}`}/>
            </span>
            <span className={`flex-center ${passed[1] ? styles['current-question'] : ''}`}>
                <i className={`fa-solid fa-${numbers[1]}`}/>
            </span>
            <span className={`flex-center ${passed[2] ? styles['current-question'] : ''}`}>
                <i className={`fa-solid fa-${numbers[2]}`}/>
            </span>
            <span className={`flex-center ${passed[3] ? styles['current-question'] : ''}`}>
                <i className={`fa-solid fa-${numbers[3]}`}/>
            </span>
            <span className={`flex-center ${passed[4] ? styles['current-question'] : ''}`}>
                {double
                    ?   <p>
                            <i className="fa-solid fa-1 num-icon"/>
                            <i className="fa-solid fa-0 num-icon"/>
                        </p>
                    :   <i className={`fa-solid fa-${numbers[4]}`}/>
                }
            </span>
        </div>
    )
}

export const QuestionsRow = React.memo(questionsRowComponent)