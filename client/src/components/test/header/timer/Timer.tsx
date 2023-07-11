import React from "react"
import styles from "@/styles/Test.module.scss"
import { Time } from "@/components/test/header/timer/Time"
import { Circle } from "@/components/test/header/timer/Circle"

const TimerComponent = () => (
    <div className={styles.timer}>
        <i className={`fa-regular fa-clock mb-5 ${styles['clock-icon']}`} />
        <div className={'relative'}>
            <Circle />
            <Time />
        </div>
    </div>
)

export const Timer = React.memo(TimerComponent)
