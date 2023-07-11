import React, { useState } from "react"
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Index.module.scss'

const Home = () => {
    const [wrapperStyle, setWrapperStyle] = useState<Object>()
    const [loadAnimation, setLoadAnimation] = useState('')

    setTimeout(() => setWrapperStyle({ backgroundColor: 'rgba(0,0,0,0.9)' }), 10)
    setTimeout(() => setLoadAnimation(styles['load-animation']), 1700)

    return (
        <>
            <Head>
                <title>Start</title>
            </Head>
            <div style={wrapperStyle} id={styles.wrapper} className={'flex-center min-h-screen'}>
                <div className={`${styles.content} ${loadAnimation} flex-center overflow-hidden rounded-xl opacity-0 h-0 px-24`}>
                    <div className={'text-center'}>
                        <p className={'text-4xl'}>Welcome : Do you want to start taking the test?</p>
                        <hr className={'w-4/5 h-1 my-16 border-0 mx-auto rounded-3xl'}/>
                        <Link className={'relative mx-auto text-3xl duration-300'} href={'/test'}>Start</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Home)
