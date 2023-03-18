import React from "react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
// Store
import { store } from "@/store/store"
// Styles
import "@/styles/main.scss"
import "@/styles/reset.scss"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default React.memo(App)
