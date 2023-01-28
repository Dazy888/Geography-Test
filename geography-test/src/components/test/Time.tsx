import React from "react"

interface Props {
    m: number
    s: number
    ms: number
}

const TimeComponents: React.FC<Props> = ({ ms, s, m}) => {
    return(
        <p>
            <span className="min">{m}</span>
            <span className="colon">:</span>
            <span className="sec">{(s < 10) ? '0' + s : s}</span>
            <span className="ms">{(ms < 10) ? '0' + ms : ms}</span>
        </p>
    )
}

export const Time = React.memo(TimeComponents)