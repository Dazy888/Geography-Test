import React from "react"
import { AppProps } from "next/app"
import { Provider } from "react-redux"
import { Analytics } from '@vercel/analytics/react'
import { store } from "@/store/store"
// Styles
import "@/styles/main.scss"
import "@/styles/reset.scss"

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
    </Provider>
)

// export default App
