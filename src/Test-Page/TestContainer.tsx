import Test from "./Stats";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-Store";
import {getAnswers, getChosenStatus, getQuestions} from "../Redux/Test-selectors";
import {addUserAnswer, choseAnswer, plusGrade, resetAnswer} from "../Redux/Test-reducer";
import Content from "./Content";

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
}

function TestContainer({resetAnswer, plusGrade, addUserAnswer, choseAnswer, questions, answers, isChosen}: PropsType) {
    // Stats Refs
    const circle: any = React.createRef()
    const minTxt: any = React.createRef()
    const secTxt: any = React.createRef()
    const msTxt: any = React.createRef()
    // Content Refs
    const answersBl: any = React.createRef()
    const rows: any = React.createRef()
    const nextBtn: any = React.createRef()
    const content: any = React.createRef()

    useEffect(() => {
        // Choose Answers
        const answersBlNode: any = answersBl.current

        function chooseAnswer(e: any) {
            if (e.target.closest('span') || e.target.tagName === 'SPAN' && !e.target.classList.contains('content__letter_selected')) {
                choseAnswer()
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

        const nextBtnNode = nextBtn.current

        function sendAnswer() {
            if (!isChosen) return
            if (currentQuestion === 10) {
                const finishBtn: any = document.createElement('button')
                finishBtn.classList.add('content__finish-btn')
                finishBtn.innerText = 'Finish Test'
                nextBtnNode.style.opacity = '0'
                setTimeout(() => {
                    nextBtnNode.remove()
                    content.current.append(finishBtn)
                    setTimeout(() => {
                        finishBtn.style.opacity = '1'
                    }, 10)
                })
                return
            }
            currentQuestion++

            setTimeout(() => {
                const currentQuestionNumbers = rows.current.querySelectorAll('.top__item')
                currentQuestionNumbers[i + 1].classList.add('top__item_selected')
            }, 600)

            setTimeout(() => {
                const chosenAnswer: any = answersBlNode.querySelector('.content__letter_selected')
                chosenAnswer.classList.remove('content__letter_selected')
                resetAnswer()
                i++
            }, 800)
        }

        nextBtnNode.onclick = sendAnswer
    }, [isChosen])

    return (
        <div id={'test-wrapper'}>
            <Test rows={rows} circle={circle} min={minTxt} sec={secTxt} ms={msTxt}/>
            <Content nextBtn={nextBtn} content={content} answersBl={answersBl}/>
        </div>
    )
}

function mapStateToProps(state: AppStateType) {
    return {
        questions: getQuestions(state),
        answers: getAnswers(state),
        isChosen: getChosenStatus(state)
    }
}

const TestContainerComponent = connect(mapStateToProps, {plusGrade, addUserAnswer, choseAnswer, resetAnswer})(TestContainer)
export default TestContainerComponent