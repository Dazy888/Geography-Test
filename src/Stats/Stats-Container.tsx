import Stats from "./Stats";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-Store";
import {getGrades, getUserAnswers} from "../Redux/Test-selectors";
import React, {useEffect} from "react";
import {resetGrades, resetUserAnswers} from "../Redux/Test-reducer";
import {useNavigate} from "react-router-dom";

type PropsType = {
    grades: number
    answers: Array<string>
    resetGrades: () => void
    resetUserAnswers: () => void
}
function StatsContainer({resetUserAnswers, resetGrades, grades, answers}: PropsType) {
    const answersBl: any = React.createRef()
    const restartBtn: any = React.createRef()
    const navigate = useNavigate()

    useEffect(() => {
        const answersContent = answersBl.current.querySelectorAll('.answers__content')
        let i = 0
        for (const answersContentElement of answersContent) {
            const answersTexts = answersContentElement.querySelectorAll('.answer')
            for (const answersText of answersTexts) {
                if (answersText.innerText === answers[i]) answersText.previousElementSibling.classList.add('round-user')
            }
            i++
        }

        function restart() {
            resetGrades()
            resetUserAnswers()
            navigate('/test')
        }

        restartBtn.current.onclick = restart
    }, [])
    return <Stats restart={restartBtn} answersBl={answersBl} grades={grades} />
}

function mapStateTpProps(state: AppStateType) {
    return {
        grades: getGrades(state),
        answers: getUserAnswers(state)
    }
}

const StatsContainerComponent = connect(mapStateTpProps, {resetGrades, resetUserAnswers})(StatsContainer)
export default StatsContainerComponent