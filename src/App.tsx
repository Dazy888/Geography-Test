import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Start-Page/Start";
import Test from "./Test-Page/Test";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
