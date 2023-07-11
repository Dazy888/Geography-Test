import React from "react"
import { Timer } from "@/components/test/header/timer/Timer"
import { Questions } from "@/components/test/header/questions/Questions"

const HeaderComponent = () => (
    <header className={`flex justify-between items-baseline pt-7`}>
        <Timer />
        <Questions />
    </header>
)

export const Header = React.memo(HeaderComponent)
