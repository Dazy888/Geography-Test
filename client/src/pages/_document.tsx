import React from "react"
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
    <Html lang="en">
        <Head>
            <link rel={'stylesheet'} href={'/fontawesome/css/all.css'}/>
            <link rel="icon" href="https://lh3.googleusercontent.com/DFc-owjHo7vlwlnS77oHER5DeLcY3YZtA6p1FSnVqXn4hVktbUdtnpc09lCHaBX0MDnl" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
)

export default React.memo(Document)
