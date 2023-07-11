import React from "react"
import styles from "@/styles/Stats.module.scss"

interface Props {
    grades: number
    wastedTime: number
}

const GratitudeComponent: React.FC<Props> = ({ grades, wastedTime }) => (
    <div className={`${styles.gratitude} mx-auto rounded-xl text-center p-4`}>
        <h2 className={'text-2xl mb-5'}>Thanks for passing the test</h2>
        <p className={'text-xl'}>
            You earned <span className={styles['colorful-text']}>{grades}</span> of 10 grades <br/>
            <span className={'block my-5'}>
                For passing the test you wasted <span className={styles['colorful-text']}>{wastedTime}</span> seconds <br/>
            </span>
            On average, it took you <span className={styles['colorful-text']}>{Math.round(wastedTime / 10)}</span> seconds to answer
        </p>
    </div>
)

export const Gratitude = React.memo(GratitudeComponent)
