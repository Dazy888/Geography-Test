import React from 'react'
// Navigation
import {BrowserRouter, Route, Routes} from "react-router-dom"
// Redux Store
import {Provider} from "react-redux"
import store from "./Redux/Redux-Store"
// Components
import {TestPage} from "./Test-Page/TestPage"
import {StatsPage} from "./Stats/Stats-Container"
import {StartPage} from "./Start-Page/Start-Page"

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<StartPage />}/>
                    <Route path="/test" element={<TestPage />}/>
                    <Route path="/stats" element={<StatsPage />}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}
export default App
