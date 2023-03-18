import React from "react"

interface Props {
    m: number
    s: number
    ms: number
}

const TimeComponent: React.FC<Props> = ({ ms, s, m}) => {
    return(
        <p className={'absolute'}>
            <span className={'min text-3xl'}>{m}</span>
            <span className={'colon text-3xl'}>:</span>
            <span className={'sec text-3xl'}>{(s < 10) ? '0' + s : s}</span>
            <span className={'ms text-sm'}>{(ms < 10) ? '0' + ms : ms}</span>
        </p>
    )
}

export const Time = React.memo(TimeComponent)
