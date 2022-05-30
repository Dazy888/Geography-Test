import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" component={<div>Hello</div>}/>
            </div>
        </BrowserRouter>
    )
}

export default App
