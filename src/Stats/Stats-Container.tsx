import React, {useEffect} from "react"
// Hooks
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
// Data
import {getAverageAnswerTime, getGrades, getUserAnswers, getWastedTime} from "../Redux/Test-selectors"
import {TestReducerActions} from "../Redux/Test-reducer"
// Component
import {Stats} from "./Stats"

export function StatsPage() {
    // Ref
    const wrapper: any = React.createRef()
    // Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Data
    const wastedTime = useSelector(getWastedTime)
    const averageAnswerTime = useSelector(getAverageAnswerTime)
    const grades = useSelector(getGrades)
    const userAnswers = useSelector(getUserAnswers)

    useEffect(() => {
        const answersContent = wrapper.current.querySelectorAll('.answers__content')
        let i = 0
        for (const answersContentElement of answersContent) {
            const answersTexts = answersContentElement.querySelectorAll('.answer')
            for (const answersText of answersTexts) {
                if (answersText.innerText === userAnswers[i]) answersText.previousElementSibling.classList.add('round-user')
            }
            i++
        }

        function restart() {
            dispatch(TestReducerActions.resetGrades())
            dispatch(TestReducerActions.resetUserAnswers())
            navigate('/')
        }

        wrapper.current.querySelector('.restart-btn').onclick = restart
    }, [])
    return <Stats wrapper={wrapper} averageAnswerTime={averageAnswerTime} wastedTime={wastedTime} grades={grades} />
}