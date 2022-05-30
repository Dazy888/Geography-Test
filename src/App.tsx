import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Start-Page/Start";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
