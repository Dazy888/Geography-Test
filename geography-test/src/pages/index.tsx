import Head from 'next/head'
import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from '@/styles/Index.module.scss'

const Home = () => {
    const router = useRouter()

    const [wrapperStyle, setWrapperStyle] = useState<Object>()
    const [loadAnimation, setLoadAnimation] = useState<string>('')

    setTimeout(() => setWrapperStyle({backgroundColor: 'rgba(0,0,0,0.9)'}), 10)
    setTimeout(() => setLoadAnimation(styles['load-animation']), 1700)

    return (
        <>
            <Head>
                <title>Start</title>
            </Head>
            <div style={wrapperStyle} id={styles['wrapper']} className="flex-center">
                <div className={`${styles['content']} ${loadAnimation} flex-center`}>
                    <div>
                        <p>Welcome : Do you want to start taking the test?</p>
                        <hr/>
                        <button onClick={() => router.push('/test')}>Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Home)