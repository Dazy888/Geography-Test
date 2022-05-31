import './Styles/Test.css'
import './Styles/Media.css'
import React, {useEffect} from "react";

function Test() {
    const circle: any = React.createRef()
    const minTxt: any = React.createRef()
    const secTxt: any = React.createRef()
    const msTxt: any = React.createRef()
    const answersBl: any = React.createRef()

    useEffect(() => {
        const circleNode: any = circle.current
        const minTxtNode: any = minTxt.current
        const secTxtNode: any = secTxt.current
        const msTxtNode: any = msTxt.current

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
            secTxtNode.innerText = sec

            function timeInterval() {
                if (min === -1 && sec === 60) clearInterval(interval)

                if (ms > 1) {
                    ms--
                    msTxtNode.innerText = ms
                } else {
                    ms = 99
                    sec--
                    secTxtNode.innerText = sec
                }

                if (ms < 10) msTxtNode.innerText = '0' + ms
                if (sec < 10) secTxtNode.innerText = '0' + sec

                if (sec === 0 && ms === 1) {
                    sec = 60
                    min--
                    minTxtNode.innerText = min
                }
            }

            const interval = setInterval(timeInterval, 10)
        }

        testTimeTimer()
        window.onload = circleAnimation


        // Choose Answers
        const answersBlNode: any = answersBl.current

        function chooseAnswer(e: any) {
            if (e.target.closest('span') || e.target.tagName === 'SPAN' && !e.target.classList.contains('content__letter_selected')) {
                const answers: any = answersBlNode.querySelectorAll('.content__letter_selected')
                if (answers.length >= 1) {
                    for (const answer of answers) {
                        answer.classList.remove('content__letter_selected')
                    }
                }
                e.target.closest('span').classList.toggle('content__letter_selected')
            }
        }
        answersBlNode.onclick = chooseAnswer
    }, [])


    return (
        <div id="wrapper">
            <div className="container">
                <div className="top flex-property-set_between">
                    <div className="top__timer">
                        <i className="fa-regular fa-clock clock-icon"></i>
                        <div className="top__svg">
                            <svg className="top__progress-ring" width="170" height="170">
                                <circle ref={circle} className="top__progress-ring_circle" stroke="rgb(255,94,149)"
                                        strokeWidth="4" r="80" fill="transparent" cx="85" cy="85"/>
                            </svg>
                            <p className="timer-txt"><span className="min" ref={minTxt}>4</span> <span className="colon">:</span>
                                <span className="sec" ref={secTxt}>00</span> <span className="ms" ref={msTxt}>00</span></p>
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
                <div className="content">
                    <div className="content__question">
                        <p className="content__txt">What country is the biggest in Europe?</p>
                        <img src="../Photos/question-1-img.png" className="content__img"/>
                    </div>
                    <div className="content__answers" ref={answersBl}>
                        <div className="content__option a">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-a letter-icon"></i> </span>
                            <p className="answer-txt">France</p>
                        </div>

                        <div className="content__option b">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-b letter-icon"></i> </span>
                            <p className="answer-txt">Ukraine</p>
                        </div>

                        <div className="content__option c">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-c letter-icon"></i> </span>
                            <p className="answer-txt">Germany</p>
                        </div>

                        <div className="content__option d">
                            <span className="content__letter flex-property-set_center"> <i
                                className="fa-solid fa-d letter-icon"></i> </span>
                            <p className="answer-txt">Polish</p>
                        </div>
                    </div>
                    <button className="content__next-btn"><i className="fa-regular fa-circle-right next-icon"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Test