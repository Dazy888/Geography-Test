import React from "react"
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html lang="en">
        <Head>
            <link rel={'stylesheet'} href={'/fontawesome/css/all.css'}/>
            <link rel={'icon'} href={'/favicon.png'} />
            <link rel={'manifest'} href={'/manifest.json'} />
            <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
)

export default React.memo(Document)
