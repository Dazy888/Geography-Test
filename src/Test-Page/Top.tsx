import './Styles/Test.css'
import './Styles/Media.css'
import React, {useEffect} from "react";
import {ActionsType} from "../Redux/Test-reducer";

type PropsType = {
    wrapper: any
    setWastedTime: (time: number) => ActionsType
    setAverageAnswerTime: (time: number) => ActionsType
    navigate: (url: string) => void
    dispatch: any
}

function Top({navigate, dispatch, wrapper, setWastedTime, setAverageAnswerTime}: PropsType) {
    useEffect(() => {
        const wrapperNode: any = wrapper.current
        const circle: any = wrapperNode.querySelector('.top__progress-ring_circle')
        const minTxt: any = wrapperNode.querySelector('.min')
        const secTxt: any = wrapperNode.querySelector('.sec')
        const msTxt: any = wrapperNode.querySelector('.ms')

        function circleAnimation() {
            const circumference = 2 * Math.PI * circle.r.baseVal.value
            circle.style.strokeDasharray = `${circumference} ${circumference}`
            circle.style.strokeDashoffset = circumference

            function setProgress(percent: number) {
                circle.style.strokeDashoffset = circumference - percent / 100 * circumference
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
            secTxt.innerText = sec

            function timeInterval() {
                if (min === 0 && sec === 0) {
                    clearInterval(interval)
                    dispatch(setWastedTime(300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))))
                    dispatch(setAverageAnswerTime((300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))) / 10))
                    navigate('/stats')
                }

                if (ms > 1) {
                    ms--
                    msTxt.innerText = ms
                } else {
                    ms = 99
                    sec--
                    secTxt.innerText = sec
                }

                if (ms < 10) msTxt.innerText = '0' + ms
                if (sec < 10) secTxt.innerText = '0' + sec

                if (sec === 0 && ms === 1) {
                    sec = 60
                    min--
                    minTxt.innerText = min
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
                <div className="top__timer">
                    <i className="fa-regular fa-clock clock-icon"></i>
                    <div className="top__svg">
                        <svg className="top__progress-ring" width="170" height="170">
                            <circle className="top__progress-ring_circle" stroke="rgb(255,94,149)"
                                    strokeWidth="4" r="80" fill="transparent" cx="85" cy="85"/>
                        </svg>
                        <p className="timer-txt"><span className="min">4</span> <span
                            className="colon">:</span>
                            <span className="sec">00</span> <span className="ms">00</span></p>
                    </div>
                </div>
                <div className="top__current-question">
                    <i className="fa-solid fa-clipboard-question current-question-icon"></i>
                    <div className="top__rows">
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