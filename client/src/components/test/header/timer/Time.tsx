import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { useTimer } from "react-timer-hook"
import {setFinishedTest, setWastedTime} from "@/store/reducer/TestSlice"

const TimeComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const currentDate = new Date()
    const futureDate = new Date(currentDate.getTime() + 9.98 * 60000)

    const { seconds, minutes} = useTimer({ expiryTimestamp: futureDate, onExpire: () => {
            dispatch(setWastedTime(300))
            router.push('/stats')
        }})

    const passedQuestions = useAppSelector(state => state.testReducer.passedQuestions)

    useEffect(() => {
        if (passedQuestions.length === 10) dispatch(setWastedTime(600 - ((minutes * 60) + seconds)))
    }, [passedQuestions])

    return(
        <p className={'absolute text-3xl'}>
            <span className={'min'}>{minutes}</span>
            <span className={'colon'}>:</span>
            <span className={'sec'}>{(seconds < 10) && '0'}{seconds}</span>
        </p>
    )
}

export const Time = React.memo(TimeComponent)
