import React, { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import styles from '@/styles/Stats.module.scss'
// Store
import { setFinishedTest } from "@/store/reducer/TestSlice"
// Components
import { Gratitude } from "@/components/stats/Gratitude"
import { StatsAnswers } from "@/components/stats/answers/StatsAnswers"
import { RestartBtn } from "@/components/stats/RestartBtn"

const Stats = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const wastedTime = useAppSelector(state => state.testReducer.wastedTime)
    const userAnswers = useAppSelector(state => state.testReducer.userAnswers)

    const [grades, setGrades] = useState(0)

    const trueAnswers = ['Ukraine', 'Caspian Sea', 'Elbrus', 'Volga', 'Greenland', '5', '6', '3', 'Jupiter', '8']

    useEffect(() => {
        if (wastedTime === 0) router.push('/')

        dispatch(setFinishedTest(true))

        if (userAnswers) for (let i = 0; i < 11; i++) {
            if (trueAnswers[i] === userAnswers[i]) setGrades(grades + 1)
        }
    }, [])

    return(
        <>
            <Head>
                <title>Stats</title>
            </Head>
            <div id={styles.wrapper} className={'w-fit min-h-screen mx-auto py-24'}>
                <Gratitude {...{ grades, wastedTime }} />
                <StatsAnswers {...{ trueAnswers, userAnswers }} />
                <RestartBtn />
            </div>
        </>
    )
}

export default React.memo(Stats)
