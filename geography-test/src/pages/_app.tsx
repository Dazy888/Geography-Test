import '@/styles/reset.scss'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import React from "react"
import { Provider } from "react-redux"
import store from "@/store/store"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default React.memo(App)