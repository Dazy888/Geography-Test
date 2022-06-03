import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {getAnswers, getChosenStatus, getPhotographs, getQuestions, getTrueAnswers} from "../Redux/Test-selectors"
import {TestReducerActions} from "../Redux/Test-reducer"
// Components
import Top from "./Top";
import {Content} from "./Content";

let i = 0
let currentQuestion = 1

export function TestPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const wrapper: any = React.createRef()
    const photographs = useSelector(getPhotographs)
    const answers = useSelector(getAnswers)
    const questions = useSelector(getQuestions)
    const isChosen = useSelector(getChosenStatus)
    const trueAnswers = useSelector(getTrueAnswers)

    useEffect(() => {
        const wrapperNode: any = wrapper.current
        const nextBtn = wrapperNode.querySelector('.content__next-btn')
        const answersBl = wrapperNode.querySelector('.content__answers')
        const content = wrapperNode.querySelector('.content')
        const img = wrapperNode.querySelector('img')
        const question = wrapperNode.querySelector('.content__txt')
        const minTxt: any = wrapperNode.querySelector('.min')
        const secTxt: any = wrapperNode.querySelector('.sec')
        const rows = wrapperNode.querySelector('.top__rows')

        function finishTest() {
            dispatch(TestReducerActions.setWastedTime(300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))))
            dispatch(TestReducerActions.setAverageAnswerTime((300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))) / 10))
            i = 0
            currentQuestion = 1
            navigate('/stats')
        }

        function sendAnswer() {
            if (!isChosen) return

            const userAnswer = answersBl.querySelector('.content__letter_selected').nextElementSibling.innerText
            if (userAnswer === trueAnswers[i]) dispatch(TestReducerActions.plusGrade())
            dispatch(TestReducerActions.addUserAnswer(userAnswer))

            if (currentQuestion === 10) {
                const finishBtn: any = document.createElement('button')
                finishBtn.classList.add('content__finish-btn')
                finishBtn.innerText = 'Finish Test'
                finishBtn.onclick = finishTest
                nextBtn.style.opacity = '0'
                setTimeout(() => {
                    nextBtn.remove()
                    content.append(finishBtn)
                    setTimeout(() => {
                        finishBtn.style.opacity = '1'
                    }, 10)
                }, 1000)
                return
            }
            currentQuestion++
            nextBtn.disabled = true

            img.style.filter = 'blur(20px)'
            setTimeout(() => {
                img.style.filter = ''
            }, 700)

            question.classList.add('animation')
            setTimeout(() => {
                question.classList.remove('animation')
                question.innerText = questions[i]
                for (const answer of answersArr) {
                    answer.classList.remove('animation')
                }
            }, 600)

            const answersArr: any = answersBl.querySelectorAll('.answer-txt')
            for (const answer of answersArr) {
                answer.classList.add('animation')
            }

            setTimeout(() => {
                const currentQuestionNumbers = rows.querySelectorAll('.top__item')
                currentQuestionNumbers[i + 1].classList.add('top__item_selected')
            }, 600)

            setTimeout(() => {
                const chosenAnswer: any = answersBl.querySelector('.content__letter_selected')
                chosenAnswer.classList.remove('content__letter_selected')
                i++
                dispatch(TestReducerActions.resetAnswer())
            }, 800)

            setTimeout(() => {
                nextBtn.disabled = false
            }, 900)
        }

        nextBtn.onclick = sendAnswer
    }, [isChosen])

    return (
        <div id={'test-wrapper'} ref={wrapper}>
            <Top dispatch={dispatch} navigate={navigate} wrapper={wrapper} setAverageAnswerTime={TestReducerActions.setAverageAnswerTime} setWastedTime={TestReducerActions.setWastedTime} />
            <Content dispatch={dispatch} img={photographs[i]} question={questions[i]} answers={answers[i]} wrapper={wrapper} choseAnswer={TestReducerActions.choseAnswer} />
        </div>
    )
}