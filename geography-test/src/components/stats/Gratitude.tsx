import React from "react"
import styles from "@/styles/Stats.module.scss"

interface Props {
    grades: string
    wastedTime: number
    averageAnswerTime: number
}

const GratitudeComponent: React.FC<Props> = ({ wastedTime, averageAnswerTime, grades }) => {
    return(
        <div className={styles["gratitude"]}>
            <p>Thanks for passing the test</p>
            <p>You earned <span className={styles['colorful-text']}>{grades}</span> of 10 grades</p>
            <p>For passing the test you wasted <span className={styles['colorful-text']}>{wastedTime}</span> seconds</p>
            <p>On average, it took you <span className={styles['colorful-text']}>{averageAnswerTime}</span> seconds to answer</p>
        </div>
    )
}

export const Gratitude= React.memo(GratitudeComponent)