import React from "react";
import { useRouter } from "next/router"
import { useAppDispatch } from "@/hooks/redux"
import styles from "@/styles/Stats.module.scss"
import { resetData } from "@/pages/test"

const RestartBtnComponent = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const restartTest = () => {
        router.push('/')
        resetData(dispatch)
    }

    return <button onClick={restartTest} className={`${styles['restart-btn']} mt-24 mx-auto rounded-xl text-2xl text-white py-2 px-10 duration-300`}>Retake the test</button>
}

export const RestartBtn = React.memo(RestartBtnComponent)
