import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Start-Page/Start";
import Test from "./Test-Page/Test";
import {Provider} from "react-redux";
import store from "./Redux/Redux-Store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Start/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App
