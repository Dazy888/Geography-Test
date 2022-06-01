import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Start-Page/Start";
import {Provider} from "react-redux";
import store from "./Redux/Redux-Store";
import TestContainer from "./Test-Page/TestContainer";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Start/>}/>
                    <Route path="/test" element={<TestContainer/>}/>
                    <Route path="/stats" element={<TestContainer />}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App
