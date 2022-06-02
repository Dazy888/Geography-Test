import Test from "./Top";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-Store";
import {getAnswers, getChosenStatus, getPhotographs, getQuestions, getTrueAnswers} from "../Redux/Test-selectors";
import {
    addUserAnswer,
    choseAnswer,
    plusGrade,
    resetAnswer,
    setAverageAnswerTime,
    setWastedTime
} from "../Redux/Test-reducer";
import Content from "./Content";
import {Navigate, useNavigate} from "react-router-dom";
import Top from "./Top";

let i = 0
let currentQuestion = 1

type PropsType = {
    plusGrade: () => void
    addUserAnswer: (answer: string) => void
    choseAnswer: () => void
    questions: Array<string>
    answers: Array<Array<string>>
    isChosen: boolean
    resetAnswer: () => void
    photographs: Array<string>
    trueAnswers: Array<string>
}

function TestContainer({
                           trueAnswers,
                           photographs,
                           resetAnswer,
                           plusGrade,
                           addUserAnswer,
                           choseAnswer,
                           questions,
                           answers,
                           isChosen
                       }: PropsType) {
    // Top Refs
    const timeBl: any = React.createRef()
    const circle: any = React.createRef()
    const minTxt: any = React.createRef()
    const secTxt: any = React.createRef()
    const msTxt: any = React.createRef()
    const rows: any = React.createRef()
    // Content Refs
    const content: any = React.createRef()
    const answersBl: any = React.createRef()
    const nextBtn: any = React.createRef()
    const img: any = React.createRef()
    const question: any = React.createRef()

    const navigate = useNavigate()

    useEffect(() => {
        const nextBtnNode = nextBtn.current
        function finishTest() {
            setWastedTime(300 - (Number(minTxt.current.innerText) * 60 + Number(secTxt.current.innerText)))
            setAverageAnswerTime((300 - (Number(minTxt.current.innerText) * 60 + Number(secTxt.current.innerText))) / 10)
            i = 0
            currentQuestion = 1
            navigate('/stats')
        }

        function sendAnswer() {
            if (!isChosen) return
            if (currentQuestion === 10) {
                const finishBtn: any = document.createElement('button')
                finishBtn.classList.add('content__finish-btn')
                finishBtn.innerText = 'Finish Test'
                finishBtn.onclick = finishTest
                nextBtnNode.style.opacity = '0'
                setTimeout(() => {
                    nextBtnNode.remove()
                    content.current.append(finishBtn)
                    setTimeout(() => {
                        finishBtn.style.opacity = '1'
                    }, 10)
                }, 1000)
                return
            }
            currentQuestion++
            nextBtnNode.disabled = true

            const imgNode = img.current
            imgNode.style.filter = 'blur(20px)'
            setTimeout(() => {
                imgNode.style.filter = ''
            }, 700)

            const questionNode = question.current
            questionNode.classList.add('animation')
            setTimeout(() => {
                questionNode.classList.remove('animation')
                questionNode.innerText = questions[i]
                for (const answer of answersArr) {
                    answer.classList.remove('animation')
                }
            }, 600)

            const answersArr: any = answersBl.current.querySelectorAll('.answer-txt')
            for (const answer of answersArr) {
                answer.classList.add('animation')
            }

            const userAnswer = answersBl.current.querySelector('.content__letter_selected').nextElementSibling.innerText

            if (userAnswer === trueAnswers[i]) plusGrade()
            addUserAnswer(userAnswer)

            setTimeout(() => {
                const currentQuestionNumbers = rows.current.querySelectorAll('.top__item')
                currentQuestionNumbers[i + 1].classList.add('top__item_selected')
            }, 600)

            setTimeout(() => {
                const chosenAnswer: any = answersBl.current.querySelector('.content__letter_selected')
                chosenAnswer.classList.remove('content__letter_selected')
                i++
                resetAnswer()
            }, 800)

            setTimeout(() => {
                nextBtnNode.disabled = false
            }, 900)
        }

        nextBtnNode.onclick = sendAnswer
    }, [isChosen])

    return (
        <div id={'test-wrapper'}>
            <Top timeBl={timeBl} rows={rows} circle={circle} min={minTxt} sec={secTxt} ms={msTxt}/>
            <Content answers={answers[i]} questionTxt={questions[i]} question={question} img={img}
                     photo={photographs[i]} choseAnswer={choseAnswer} nextBtn={nextBtn} content={content}
                     answersBl={answersBl}/>
        </div>
    )
}

function mapStateToProps(state: AppStateType) {
    return {
        questions: getQuestions(state),
        answers: getAnswers(state),
        isChosen: getChosenStatus(state),
        photographs: getPhotographs(state),
        trueAnswers: getTrueAnswers(state)
    }
}

const TestContainerComponent = connect(mapStateToProps, {
    plusGrade,
    addUserAnswer,
    choseAnswer,
    resetAnswer,
    setWastedTime,
    setAverageAnswerTime
})(TestContainer)
export default TestContainerComponent