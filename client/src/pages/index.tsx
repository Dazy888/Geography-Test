import React, { useState } from "react"
import Head from 'next/head'
import { useRouter } from "next/router"
import styles from '@/styles/Index.module.scss'

const Home = () => {
    const router = useRouter()

    const [wrapperStyle, setWrapperStyle] = useState<Object>()
    const [loadAnimation, setLoadAnimation] = useState('')

    setTimeout(() => setWrapperStyle({ backgroundColor: 'rgba(0,0,0,0.9)' }), 10)
    setTimeout(() => setLoadAnimation(styles['load-animation']), 1700)

    return (
        <>
            <Head>
                <title>Start</title>
            </Head>
            <div style={wrapperStyle} id={styles.wrapper} className={'flex items-center min-h-screen'}>
                <div className={`${styles.content} ${loadAnimation} flex justify-center items-center overflow-hidden pt-7 pb-2.5 rounded-xl opacity-0 h-0 mx-auto`}>
                    <div className={'text-center'}>
                        <p className={'text-5xl'}>Welcome : Do you want to start taking the test?</p>
                        <hr className={'w-4/5 mt-28 mx-auto'}/>
                        <button className={'relative mt-28 mx-auto text-5xl'} onClick={() => router.push('/test')}>Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Home)
