import React, {useEffect} from "react"
// CSS
import './Styles/Test.css'
import './Styles/Media.css'
// Hooks
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
// Data
import {getAnswers, getChosenStatus, getPhotographs, getQuestions, getTrueAnswers} from "../Redux/Test-selectors"
import {TestReducerActions} from "../Redux/Test-reducer"
// Components
import Top from "./Top";
import {Content} from "./Content";

let i = 0
let currentQuestion = 1

export function TestPage() {
    // Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Ref
    const wrapper: any = React.createRef()
    // Data
    const photographs = useSelector(getPhotographs)
    const answers = useSelector(getAnswers)
    const questions = useSelector(getQuestions)
    const isChosen = useSelector(getChosenStatus)
    const trueAnswers = useSelector(getTrueAnswers)

    useEffect(() => {
        const wrapperNode: any = wrapper.current
        // Top Elements
        const minTxt: any = wrapperNode.querySelector('.min')
        const secTxt: any = wrapperNode.querySelector('.sec')
        const rows = wrapperNode.querySelector('.top__rows')
        // Content Elements
        const content = wrapperNode.querySelector('.content')
        const question = wrapperNode.querySelector('.content__txt')
        const img = wrapperNode.querySelector('img')
        const answersBl = wrapperNode.querySelector('.content__answers')
        const nextBtn = wrapperNode.querySelector('.content__next-btn')

        function sendAnswer() {
            if (!isChosen) return

            const userAnswer = answersBl.querySelector('.content__letter_selected').nextElementSibling.innerText
            if (userAnswer === trueAnswers[i]) dispatch(TestReducerActions.plusGrade())
            dispatch(TestReducerActions.addUserAnswer(userAnswer))

            function finishTest() {
                dispatch(TestReducerActions.setWastedTime(300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))))
                dispatch(TestReducerActions.setAverageAnswerTime((300 - (Number(minTxt.innerText) * 60 + Number(secTxt.innerText))) / 10))
                i = 0
                currentQuestion = 1
                navigate('/stats')
            }

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

            // Img, Question Txt, Current Question Animations
            img.style.filter = 'blur(20px)'
            question.classList.add('animation')
            setTimeout(() => {
                // Question Txt
                question.classList.remove('animation')
                question.innerText = questions[i]
                for (const answer of answersArr) {
                    answer.classList.remove('animation')
                }

                // Img
                img.style.filter = ''

                // Current Question
                const currentQuestionNumbers = rows.querySelectorAll('.top__item')
                currentQuestionNumbers[i + 1].classList.add('top__item_selected')
            }, 600)


            const answersArr: any = answersBl.querySelectorAll('.answer-txt')
            for (const answer of answersArr) {
                answer.classList.add('animation')
            }

            setTimeout(() => {
                const chosenAnswer: any = answersBl.querySelector('.content__letter_selected')
                chosenAnswer.classList.remove('content__letter_selected')
                i++
                dispatch(TestReducerActions.resetAnswer())
                nextBtn.disabled = false
            }, 800)
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