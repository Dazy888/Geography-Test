import React, { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import styles from '@/styles/Test.module.scss'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
// Store
import { setFinishedTest } from "@/store/reducer/TestSlice"
// Components
import { Header } from "@/components/test/header/Header"
import { Main } from "@/components/test/content/Main"

const Test = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const finishedTest = useAppSelector(state => state.testReducer.finishedTest)

    useEffect(() => {
        if (finishedTest) {
            dispatch(setFinishedTest(false))
            router.push('/')
        }
    }, [finishedTest])

    return(
        <>
            <Head>
                <title>Test</title>
            </Head>
            <div id={styles.wrapper} className={'w-fit h-fit mx-auto pb-6'}>
                <Header />
                <Main />
            </div>
        </>
    )
}

export default React.memo(Test)
