import './Styles/Test.css'
import './Styles/Media.css'
import React, {useEffect} from "react";

type PropsType = {
    circle: any
    sec: any
    min: any
    ms: any
    rows: any
    timeBl: any
}

function Top({timeBl, circle, sec, min, ms, rows}: PropsType) {
    useEffect(() => {
        const circleNode: any = circle.current
        const minNode: any = min.current
        const secNode: any = sec.current
        const msNode: any = ms.current

        function circleAnimation() {
            const circumference = 2 * Math.PI * circleNode.r.baseVal.value
            circleNode.style.strokeDasharray = `${circumference} ${circumference}`
            circleNode.style.strokeDashoffset = circumference

            function setProgress(percent: number) {
                circleNode.style.strokeDashoffset = circumference - percent / 100 * circumference
            }

            let c = 100;
            setProgress(c)

            function circleInterval() {
                if (c < 0) {
                    c = 0
                    setProgress(c)
                    clearInterval(progressInt)
                    return
                }
                setProgress(c)
                c = c - 0.33
            }

            const progressInt = setInterval(circleInterval, 1000)
        }

        function testTimeTimer() {
            let min = 4
            let sec = 59
            let ms = 0
            secNode.innerText = sec

            function timeInterval() {
                if (min === -1 && sec === 60) clearInterval(interval)

                if (ms > 1) {
                    ms--
                    msNode.innerText = ms
                } else {
                    ms = 99
                    sec--
                    secNode.innerText = sec
                }

                if (ms < 10) msNode.innerText = '0' + ms
                if (sec < 10) secNode.innerText = '0' + sec

                if (sec === 0 && ms === 1) {
                    sec = 60
                    min--
                    minNode.innerText = min
                }
            }

            const interval = setInterval(timeInterval, 10)
        }

        testTimeTimer()
        circleAnimation()
    }, [])
    return (
        <div className="container">
            <div className="top flex-property-set_between">
                <div className="top__timer" ref={timeBl}>
                    <i className="fa-regular fa-clock clock-icon"></i>
                    <div className="top__svg">
                        <svg className="top__progress-ring" width="170" height="170">
                            <circle ref={circle} className="top__progress-ring_circle" stroke="rgb(255,94,149)"
                                    strokeWidth="4" r="80" fill="transparent" cx="85" cy="85"/>
                        </svg>
                        <p className="timer-txt"><span className="min" ref={min}>4</span> <span
                            className="colon">:</span>
                            <span className="sec" ref={sec}>00</span> <span className="ms" ref={ms}>00</span></p>
                    </div>
                </div>
                <div className="top__current-question">
                    <i className="fa-solid fa-clipboard-question current-question-icon"></i>
                    <div className="top__rows" ref={rows}>
                        <div className="top__row flex-property-set_between">
                                <span className="top__item flex-property-set_center top__item_selected"> <i
                                    className="fa-solid fa-1 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-2 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-3 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-4 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-5 num-icon"></i> </span>
                        </div>

                        <div className="top__row flex-property-set_between">
                                <span className="top__item flex-property-set_center"> <i
                                    className="fa-solid fa-6 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-7 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-8 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center"> <i
                                className="fa-solid fa-9 num-icon"></i> </span>
                            <span className="top__item flex-property-set_center">
                        <i className="fa-solid fa-1 num-icon"></i>
                        <i className="fa-solid fa-0 num-icon"></i>
                    </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top