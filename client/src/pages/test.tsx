import React from "react"
import Head from "next/head"
import styles from '@/styles/Test.module.scss'
import { Header } from "@/components/test/header/Header"
import { Main } from "@/components/test/content/Main"

const Test = () => (
    <>
        <Head>
            <title>Test</title>
        </Head>
        <div id={styles.wrapper} className={'w-fit h-fit mx-auto pb-6'}>
            <Header />
            <Main/>
        </div>
    </>
)

export default React.memo(Test)
