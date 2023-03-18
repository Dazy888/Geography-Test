import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
// Styles
import styles from "@/styles/Test.module.scss"
// Components
import { QuestionsRow } from "@/components/test/QuestionsRow"
import { Time } from "@/components/test/Time"
// Store
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { setWastedTime } from "@/store/reducer/TestSlice"

const StatsComponent = () => {
    let m: any = 4
    let s: any = 59
    let ms: any = 99
    let c = 100
    let r = 60

    const router = useRouter()
    const dispatch = useAppDispatch()
    const circle: any = useRef()

    const passedQuestions = useAppSelector(state => state.testReducer.passedQuestions)

    useEffect(() => {
        if (passedQuestions.length === 10) dispatch(setWastedTime(300 - (mText * 60 + sText)))
    }, [passedQuestions])

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

        const circleInterval = () => {
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
        const timeInterval = () => {
            if (m === 0 && s === 0) {
                clearInterval(interval)
                dispatch(setWastedTime(300))
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
        <div className={`${styles.header} flex justify-between items-baseline pt-7`}>
            <div className={styles.timer}>
                <i className={`fa-regular fa-clock mb-5 ${styles['clock-icon']}`}/>
                <div className={'relative'}>
                    <svg className={'block mx-auto'}>
                        <circle ref={circle} stroke={'rgb(255,94,149)'} strokeWidth={'4'} r={r} fill={'transparent'} cx={'85'} cy={'85'} />
                    </svg>
                    <Time m={mText} s={sText} ms={msText}/>
                </div>
            </div>
            <div className={styles.questions}>
                <i className={`fa-solid fa-clipboard-question mb-12 ${styles['current-question-icon']}`}/>
                <div className={`${styles['questions__rows']} mx-auto`}>
                    <QuestionsRow passed={passedQuestions.slice(0, 5)} numbers={['1', '2', '3', '4', '5']}/>
                    <QuestionsRow passed={passedQuestions.slice(5, 10)} double={true} numbers={['6', '7', '8', '9', '']}/>
                </div>
            </div>
        </div>
    )
}

export const Stats = React.memo(StatsComponent)
