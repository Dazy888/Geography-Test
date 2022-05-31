import Test from "./Test";
import React, {useEffect} from "react";

function TestContainer() {
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

    return <Test circle={circle} min={minTxt} sec={secTxt} ms={msTxt} answers={answersBl} />
}

export default TestContainer