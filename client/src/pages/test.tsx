import React from "react"
import Head from "next/head"
// Styles
import styles from '@/styles/Test.module.scss'
// Components
import { Stats } from "@/components/test/Stats"
import { Content } from "@/components/test/Content"

const Test = () => {
    return(
        <>
            <Head>
                <title>Test</title>
            </Head>
            <div id={styles.wrapper} className={'w-fit h-fit mx-auto pb-2.5'}>
                <Stats/>
                <Content/>
            </div>
        </>
    )
}

export default React.memo(Test)
