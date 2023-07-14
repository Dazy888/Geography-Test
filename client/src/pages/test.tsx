import React, { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import styles from '@/styles/Test.module.scss'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Store
import { resetPassedQuestions, resetUserAnswers, setCurrentQuestion, setFinishedTest, setWastedTime } from "@/store/reducer/TestSlice"
// Components
import { Header } from "@/components/test/header/Header"
import { Main } from "@/components/test/content/Main"
// Models
import { AppDispatch } from "@/store/store"

export function resetData(dispatch: AppDispatch) {
    dispatch(resetUserAnswers())
    dispatch(setCurrentQuestion(0))
    dispatch(resetPassedQuestions())
    dispatch(setWastedTime(0))
    dispatch(setFinishedTest(false))
}

const Test = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const finishedTest = useAppSelector(state => state.testReducer.finishedTest)

    useEffect(() => {
        if (finishedTest) {
            router.push('/')
            resetData(dispatch)
        }
    }, [finishedTest])

    return(
        <>
            <Head>
                <title>Test</title>
            </Head>
            <div id={styles.wrapper} className={'w-fit h-screen mx-auto flex justify-center items-center'}>
                { finishedTest
                    ?   <div className={styles.loader}></div>
                    :   <div>
                            <Header />
                            <Main />
                        </div>
                }
            </div>
        </>
    )
}

export default React.memo(Test)
