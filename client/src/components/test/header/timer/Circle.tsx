import React, { useEffect, useRef } from "react"

const CircleComponent = () => {
    let c = 100
    let r = 60
    const circleRef = useRef<SVGCircleElement>(null)

    useEffect(() => {
        if (window.innerWidth <= 375) {
            r = 45
        } else if (window.innerWidth <= 1024) {
            r = 50
        }
    }, [])

    useEffect(() => {
        const circumference = 2 * Math.PI * r
        const circleElement = circleRef.current

        let circleInterval: NodeJS.Timer | null = null

        if (circleElement) {
            circleElement.style.strokeDasharray = `${circumference} ${circumference}`
            circleElement.style.strokeDashoffset = `${circumference - (c / 100) * circumference}`

            circleInterval = setInterval(() => {
                if (c < 0) {
                    c = 0
                    clearInterval(circleInterval as any)
                } else {
                    (r === 50) ? c -= 0.0102 : c -= 0.0153
                }

                circleElement.style.strokeDashoffset = `${circumference - (c / 100) * circumference}`
            }, 100)
        }

        return () => clearTimeout(circleInterval as any)
    }, [r])

    return(
        <svg className={'block absolute mx-auto'}>
            <circle ref={circleRef} stroke={'rgb(255,94,149)'} strokeWidth={'4'} r={r} fill={'transparent'} cx={'63'} cy={'62'} />
        </svg>
    )
}

export const Circle = React.memo(CircleComponent)
