import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
// Styles
import styles from "@/styles/Test.module.scss"
// Components
import { QuestionsRow } from "@/components/timer/Questions-row"
import { Time } from "@/components/test/Time"
// Store
import {getCircleR, getPassedQuestions} from "@/store/reducer/test-selector"
import { TestReducerActions } from "@/store/reducer/test-reducer"

let m: any = 4
let s: any = 59
let ms: any = 99
let c = 100
let r = 60

const StatsComponent = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const circle: any = useRef()

    const passedQuestions = useSelector(getPassedQuestions)

    // const [circleR, setCircleR] = useState(60)

    // const circleR = useSelector(getCircleR)

    const [mText, setM] = useState(m)
    const [sText, setS] = useState(s)
    const [msText, setMs] = useState(ms)

    useEffect(() => {
        if (window.innerWidth <= 375) {
            r = 45
        } else if (window.innerWidth <= 1024) {
            r = 50
        }
    }, [])

    useEffect(() => {
        const circumference = 2 * Math.PI * r
        circle.current.style.strokeDasharray = `${circumference} ${circumference}`
        circle.current.style.strokeDashoffset = circumference

        const setProgress = (percent: number) => circle.current.style.strokeDashoffset = circumference - percent / 100 * circumference
        setProgress(c)

        function circleInterval() {
            if (circle.current) {
                if (c < 0) {
                    c = 0
                    setProgress(c)
                    clearInterval(progressInt)
                } else {
                    setProgress(c)

                    if (r === 50 || r === 45) {
                        c = c - 0.0102
                    } else {
                        c = c - 0.0153
                    }
                }
            }
        }

        let progressInt = setInterval(circleInterval, 100)
    }, [r, circle])

    useEffect(() => {
        function timeInterval() {
            if (m === 0 && s === 0) {
                clearInterval(interval)
                dispatch(TestReducerActions.setWastedTime(300))
                dispatch(TestReducerActions.setAverageAnswerTime(30))
                router.push('/stats')
            }

            if (ms > 1) {
                ms--
                setMs(ms)
            } else {
                ms = 99
                setMs(ms)
                s--
                setS(s)
            }

            if (s === 0 && ms === 1) {
                s = 60
                setS(s)
                m--
                setM(m)
            }
        }

        let interval = setInterval(timeInterval, 22)
    }, [])

    return(
        <div className={`${styles['header']} flex-between`}>
            <div className={styles["header__timer"]}>
                <i className={`fa-regular fa-clock ${styles['clock-icon']}`}/>
                <div>
                    <svg>
                        <circle ref={circle} stroke="rgb(255,94,149)" strokeWidth="4" r={r} fill="transparent" cx="85" cy="85"/>
                    </svg>
                    <Time m={mText} s={sText} ms={msText}/>
                </div>
            </div>
            <div className={styles["header__questions"]}>
                <i className={`fa-solid fa-clipboard-question ${styles['current-question-icon']}`}/>
                <div className={styles["header__questions-rows"]}>
                    <QuestionsRow passed={passedQuestions.slice(0, 5)} numbers={['1', '2', '3', '4', '5']}/>
                    <QuestionsRow passed={passedQuestions.slice(5, 10)} double={true} numbers={['6', '7', '8', '9', '']}/>
                </div>
            </div>
        </div>
    )
}

export const Stats = React.memo(StatsComponent)